import { last } from 'lodash';
import NextLink from 'next/link';
import { Box, Link, Typography, Breadcrumbs, BreadcrumbsProps } from '@mui/material';
import { ReactElement } from 'react';

// ----------------------------------------------------------------------

const Separator = (
  <Box
    component="span"
    sx={{
      width: 4,
      height: 4,
      borderRadius: '50%',
      bgcolor: 'text.disabled',
    }}
  />
);

type TLink = {
  href?: string;
  name: string;
  icon?: ReactElement;
};

function LinkItem({ link }: { link: TLink }) {
  const { href, name, icon } = link;
  return (
    <NextLink key={name} href={href || '#'} passHref>
      <Link
        variant="body2"
        sx={{
          lineHeight: 2,
          display: 'flex',
          alignItems: 'center',
          color: 'text.primary',
          '& > div': { display: 'inherit' },
        }}
      >
        {icon && (
          <Box
            sx={{
              mr: 1,
              '& svg': { width: 20, height: 20 },
            }}
          >
            {icon}
          </Box>
        )}
        {name}
      </Link>
    </NextLink>
  );
}

export interface MBreadcrumbsProps extends BreadcrumbsProps {
  links: TLink[];
  activeLast?: boolean;
}

export default function MBreadcrumbs({ links, activeLast = false, ...other }: MBreadcrumbsProps) {
  const currentLink = last(links)?.name;

  const listDefault = links.map(link => <LinkItem key={link.name} link={link} />);
  const listActiveLast = links.map(link => (
    <div key={link.name}>
      {link.name !== currentLink ? (
        <LinkItem link={link} />
      ) : (
        <Typography
          variant="body2"
          sx={{
            maxWidth: 260,
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            color: 'text.disabled',
            textOverflow: 'ellipsis',
          }}
        >
          {currentLink}
        </Typography>
      )}
    </div>
  ));

  return (
    <Breadcrumbs separator={Separator} {...other}>
      {activeLast ? listDefault : listActiveLast}
    </Breadcrumbs>
  );
}
