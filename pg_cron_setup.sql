-- ════════════════════════════════════════════════════════════════
--  AUTO-NO-SHOW CRON SETUP
--  Run this ONCE in Supabase SQL Editor.
--  Purpose: every day at 00:01 IST, automatically mark any past-date
--  Confirmed booking as No-show. Closes the abuse loophole where
--  hospital staff forgets to act and the customer escapes the no-show
--  counter. Follow-ups are skipped (free, less consequential).
--
--  PRE-FLIGHT (one-time, do this in dashboard, not SQL editor):
--    Supabase Dashboard → Database → Extensions → search "pg_cron"
--    → toggle it ON. Without this, CREATE EXTENSION below will fail.
-- ════════════════════════════════════════════════════════════════

-- 1. Confirm pg_cron is enabled (no-op if already enabled in dashboard).
CREATE EXTENSION IF NOT EXISTS pg_cron;

-- 2. Remove any previous version of this job (safe to re-run).
SELECT cron.unschedule(jobid)
  FROM cron.job
 WHERE jobname = 'auto-no-show-stale';

-- 3. Schedule the daily sweep at 00:01 IST (18:31 UTC).
--    Cron format: minute hour day month day-of-week
SELECT cron.schedule(
   'auto-no-show-stale',
   '31 18 * * *',
   $cron$
   UPDATE public.appointments
      SET status = 'No-show',
          cancellation_reason = CASE
            WHEN cancellation_reason IS NULL OR cancellation_reason = ''
              THEN 'Auto-marked: no action by end of day'
            ELSE cancellation_reason
          END
    WHERE status = 'Confirmed'
      AND date < to_char((NOW() AT TIME ZONE 'Asia/Kolkata')::date, 'YYYY-MM-DD')
      AND COALESCE(is_followup, false) = false;
   $cron$
);

-- 4. Verify the job is scheduled.
SELECT jobname, schedule, active, command
  FROM cron.job
 WHERE jobname = 'auto-no-show-stale';


-- ────────────────────────────────────────────────────────────────
--  HANDY QUERIES (run any time after setup)
-- ────────────────────────────────────────────────────────────────

-- Preview which rows WOULD be auto-marked right now (before next run).
-- SELECT apt_id, doctor_name, date, slot, patient_name, user_email
--   FROM public.appointments
--  WHERE status = 'Confirmed'
--    AND date < to_char((NOW() AT TIME ZONE 'Asia/Kolkata')::date, 'YYYY-MM-DD')
--    AND COALESCE(is_followup, false) = false
--  ORDER BY date DESC;

-- Run the sweep manually right now (don't wait for cron).
-- UPDATE public.appointments
--    SET status = 'No-show',
--        cancellation_reason = 'Auto-marked: no action by end of day'
--  WHERE status = 'Confirmed'
--    AND date < to_char((NOW() AT TIME ZONE 'Asia/Kolkata')::date, 'YYYY-MM-DD')
--    AND COALESCE(is_followup, false) = false;

-- Check the last 10 cron runs (success/error history).
-- SELECT runid, status, return_message, start_time, end_time
--   FROM cron.job_run_details
--  WHERE jobid = (SELECT jobid FROM cron.job WHERE jobname = 'auto-no-show-stale')
--  ORDER BY start_time DESC
--  LIMIT 10;

-- Disable / remove the cron job entirely (if you ever need to).
-- SELECT cron.unschedule('auto-no-show-stale');
