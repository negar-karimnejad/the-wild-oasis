/* eslint-disable no-undef */

import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://wvbkbmtotxxgmmmatrsq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind2YmtibXRvdHh4Z21tbWF0cnNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk5OTIzMDMsImV4cCI6MjAyNTU2ODMwM30.2KpknQt_OSuudTnBx4u4eANTDbJsEJXDegNvnMx3etA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
