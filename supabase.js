const { createClient } = supabase

const db = createClient(
  'https://oqjbpfcekubulyeynywf.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xamJwZmNla3VidWx5ZXlueXdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUzNjE1MjYsImV4cCI6MjA5MDkzNzUyNn0.k9l3w3PfWEnQ4ph8BqUUVI1ODxNkG8D1aZU3ou-V91A'
)