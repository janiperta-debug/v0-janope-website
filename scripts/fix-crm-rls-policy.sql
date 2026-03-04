-- Add anon policy for crm_contacts (admin layout already protects the route with auth)
CREATE POLICY "Anon users can read crm_contacts" ON crm_contacts
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Anon users can insert crm_contacts" ON crm_contacts
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anon users can update crm_contacts" ON crm_contacts
  FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Anon users can delete crm_contacts" ON crm_contacts
  FOR DELETE
  TO anon
  USING (true);
