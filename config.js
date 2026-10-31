/* =====================================================================
   config.js — Supabase সংযোগ ও টেবিলের নাম এখানে ঠিক করুন।
   এই ফাইল index.html-এর পাশেই (একই ফোল্ডারে) রাখতে হবে।

   ⚠ শুধু anon / publishable কী দিন। service_role বা sb_secret_… কী কখনোই নয়
     (দিলে অ্যাপ নিজেই প্রত্যাখ্যান করবে)।
   ⚠ url ও anonKey খালি রাখলে অ্যাপ খুলবে না — লগইন বাধ্যতামূলক, তাই Supabase সংযোগ দিতেই হবে।
   ===================================================================== */
window.APP_CONFIG = {

  /* ---------- Supabase সংযোগ ---------- */
  supabase: {
    url: "https://ovzyjnoqnbpwwlqtkwit.supabase.co",        // যেমন: "https://abcdxyz.supabase.co"
    anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92enlqbm9xbmJwd3dscXRrd2l0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5MzA2MDIsImV4cCI6MjA5NjUwNjYwMn0.UgGC9Bvjeud6v29CjUVrnfRWBuf7jDTxmCOW0u62NRw"     // যেমন: "eyJhbGciOi…" অথবা "sb_publishable_…"
  },

  /* ---------- একমাত্র টেবিলের নাম ----------
     সব তথ্য (হিসাব, লেনদেন, অডিট, সেটিংস) এই একটি টেবিলে আলাদা আলাদা সারিতে থাকে।
     SQL.sql-এর ENTER YOUR TABLE NAME লাইনে যে নাম দেবেন, এখানেও ঠিক সেই নাম দিন (ছোট হাতের অক্ষর)। */
  table: "equation",   // ENTER YOUR TABLE NAME : SQL.sql-এ যে নাম দিয়েছেন ঠিক সেটি

  /* ---------- লগইন ----------
     allowSignUp: false দিলে অ্যাপে "সাইন আপ" বোতাম থাকবে না
     (Supabase Dashboard → Authentication → Sign In / Providers-এ নতুন সাইন-আপও বন্ধ রাখুন)। */
  auth: { allowSignUp: false }
};