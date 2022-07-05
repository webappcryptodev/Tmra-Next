import config from '@configuration';
import { IncomingMessage } from 'http';
import { NonprofitAppearance } from 'src/models/Organization';

export interface OrganizationInfo {
  id: string;
  name: string;
}

/**
 * Important: Next.js props cannot be undefined, so for missing value, use null.
 */
export interface GenericPageProps {
  organization: OrganizationInfo | null;
  appearance: NonprofitAppearance | null;
}

export async function getOrganizationFromFqdn(fqdn?: string): Promise<OrganizationInfo | null> {
  // TODO: query MongoDB
  switch (fqdn) {
    case 'whitedemo.tmra.io':
    case 'donate-staging.anakalam.id':
    case 'donate.anakalam.id':
    case 'dev.anakalam.id':
    case 'qc.anakalam.id':
    case 'staging.anakalam.id':
    case 'www.anakalam.id':
      return {
        id: '60f524626f471e54c18e39b9',
        name: 'Dunia Anak Alam Foundation',
      };

    case 'iqamdemo.tmra.io':
    case 'www.ommar.net':
    case 'donate.ommar.net':
    case 'v2-0-staging.ommar.net':
    case 'staging.ommar.net':
    case 'v2-0-qc.ommar.net':
    case 'qc.ommar.net':
    case 'v2-0-dev.ommar.net':
    case 'dev.ommar.net':
      return {
        id: '61b4794cfe52d41f557f1acc',
        name: 'Ommar',
      };

    case 'www.givingsadaqah.org':
    case 'donate.givingsadaqah.org':
    case 'givingsadaqah.tmra.io':
    case 'staging.givingsadaqah.org':
    case 'givingsadaqah-staging.tmra.io':
    case 'givingsadaqah-qc.tmra.io':
    case 'givingsadaqah-dev.tmra.io':
      // case '3000-tamrah-tmranext-hwq9lvtpm92.ws-us38.gitpod.io':
      return {
        id: '62414373cf00cca3a830814a',
        name: 'Giving Sadaqah',
      };
    default:
      return null;
  }
}

export async function getOrganizationFromRequest(
  req: IncomingMessage,
): Promise<OrganizationInfo | null> {
  let organization = await getOrganizationFromFqdn(req.headers['host']);
  if (organization) {
    console.debug(
      `Using ASSIGNED organization ${organization.id} (${organization.name}) for Host "${req.headers['host']}"`,
    );
  } else if (config.defaultOrganization?.organizationId) {
    organization = {
      id: config.defaultOrganization.organizationId,
      name: config.defaultOrganization.name,
    };
    console.debug(
      `Using DEFAULT organization ${organization.id} (${organization.name}) for Host "${req.headers['host']}"`,
    );
  }
  return organization;
}
