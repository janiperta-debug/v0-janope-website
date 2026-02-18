const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const adminPassword = process.env.ADMIN_TEMP_PASSWORD;

if (!supabaseUrl || !supabaseServiceKey || !adminPassword) {
  console.error("Missing required environment variables");
  process.exit(1);
}

async function updateAdminPassword() {
  const email = "jani.perta@gmail.com";

  // First, find the existing user by email
  const listResponse = await fetch(
    `${supabaseUrl}/auth/v1/admin/users?page=1&per_page=50`,
    {
      headers: {
        Authorization: `Bearer ${supabaseServiceKey}`,
        apikey: supabaseServiceKey,
      },
    }
  );

  const listData = await listResponse.json();
  const user = listData.users?.find((u) => u.email === email);

  if (!user) {
    console.error("User not found with email:", email);
    process.exit(1);
  }

  console.log("Found existing user:", user.id);

  // Update the password and ensure email is confirmed
  const updateResponse = await fetch(
    `${supabaseUrl}/auth/v1/admin/users/${user.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${supabaseServiceKey}`,
        apikey: supabaseServiceKey,
      },
      body: JSON.stringify({
        password: adminPassword,
        email_confirm: true,
        user_metadata: {
          role: "admin",
        },
      }),
    }
  );

  const updateData = await updateResponse.json();

  if (!updateResponse.ok) {
    console.error("Failed to update user:", updateData);
    process.exit(1);
  }

  console.log("Password updated successfully!");
  console.log("Email:", email);
  console.log("");
  console.log("You can now log in at /auth/login with your email and new password.");
}

updateAdminPassword();
