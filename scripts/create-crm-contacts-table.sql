-- Create CRM contacts table for sales pipeline management
CREATE TABLE IF NOT EXISTS crm_contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  kunta TEXT NOT NULL,
  tuote TEXT NOT NULL DEFAULT 'Finnvesta',
  kontakti_nimi TEXT,
  rooli TEXT,
  email TEXT,
  puhelin TEXT,
  yhteydenotto_pvm DATE,
  kanava TEXT DEFAULT 'Sähköposti',
  tila TEXT NOT NULL DEFAULT 'Ei aloitettu',
  prioriteetti TEXT DEFAULT 'Keski',
  seuraava_askel TEXT,
  muistiinpanot TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for common queries
CREATE INDEX IF NOT EXISTS idx_crm_contacts_tila ON crm_contacts(tila);
CREATE INDEX IF NOT EXISTS idx_crm_contacts_tuote ON crm_contacts(tuote);
CREATE INDEX IF NOT EXISTS idx_crm_contacts_prioriteetti ON crm_contacts(prioriteetti);

-- Enable RLS
ALTER TABLE crm_contacts ENABLE ROW LEVEL SECURITY;

-- Create policy for authenticated users
CREATE POLICY "Authenticated users can manage crm_contacts" ON crm_contacts
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create updated_at trigger function if not exists
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for updated_at
DROP TRIGGER IF EXISTS crm_contacts_updated_at ON crm_contacts;
CREATE TRIGGER crm_contacts_updated_at
  BEFORE UPDATE ON crm_contacts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
