const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const adminPassword = process.env.ADMIN_TEMP_PASSWORD;

if (!supabaseUrl || !supabaseServiceKey || !adminPassword) {
  console.error("Missing required environment variables:");
  if (!supabaseUrl) console.error("  - NEXT_PUBLIC_SUPABASE_URL");
  if (!supabaseServiceKey) console.error("  - SUPABASE_SERVICE_ROLE_KEY");
  if (!adminPassword) console.error("  - ADMIN_TEMP_PASSWORD");
  process.exit(1);
}

async function createAdminUser() {
  const email = "jani.perta@gmail.com";

  const response = await fetch(`${supabaseUrl}/auth/v1/admin/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${supabaseServiceKey}`,
      apikey: supabaseServiceKey,
    },
    body: JSON.stringify({
      email,
      password: adminPassword,
      email_confirm: true,
      user_metadata: {
        role: "admin",
      },
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    console.error("Failed to create user:", data);
    process.exit(1);
  }

  console.log("Admin user created successfully!");
  console.log("Email:", email);
  console.log("User ID:", data.id);
  console.log("");
  console.log("You can now log in at /auth/login with your email and password.");
}

createAdminUser();
