import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yoidkpwbeexzgcjdigsv.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlvaWRrcHdiZWV4emdjamRpZ3N2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkxNzEyNzIsImV4cCI6MjAwNDc0NzI3Mn0.I8s9FWbqC09v8FIPKpZooR8VlI9iPNioLSeYNurGHIw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
