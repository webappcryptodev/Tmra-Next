// @mui
import { useTheme } from '@mui/material/styles';
import { TableRow, Checkbox, TableCell, Typography } from '@mui/material';
// components
import Label from '@components/Label';
import Image from '@components/Image';
import TableMoreMenu from '@components/table/TableMoreMenu';
import { CampaignInfo } from '@modules/fundraising/Campaign';
import RuntimeConfigs from '@utils/runtime-configs';
import getConfig from 'next/config';
import moment from 'moment';
//

// ----------------------------------------------------------------------

type Props = {
  row: CampaignInfo;
  selected?: boolean;
  onSelectRow?: VoidFunction;
  actions?: React.ReactNode;
  share?: boolean;
  shareLink?: string;
};

export default function ProductTableRow({
  actions,
  row,
  selected,
  onSelectRow,
  share,
  shareLink,
}: Props) {
  const theme = useTheme();
  const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

  const { title, coverImage, createdAt, isPublished } = row;

  return (
    <TableRow hover selected={selected}>
      <TableCell padding="checkbox">
        <Checkbox checked={selected} onClick={onSelectRow} />
      </TableCell>
      <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
        <Image
          disabledEffect
          alt={title}
          src={`${publicRuntimeConfig.bunny.cdn.urlMedia}/${coverImage}?w=720`}
          sx={{ borderRadius: 1.5, width: 48, height: 48, mr: 2 }}
        />
        <Typography variant="subtitle2" noWrap>
          {title}
        </Typography>
      </TableCell>
      <TableCell>{moment(createdAt).format('DD MMM YYYY')}</TableCell>
      <TableCell align="center">
        <Label
          variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
          color={((!isPublished || isPublished === 'N') && 'error') || 'success'}
          sx={{ textTransform: 'capitalize' }}
        >
          {isPublished === 'Y' ? 'Publish' : 'Unublish'}
        </Label>
      </TableCell>
      <TableCell align="right">
        <TableMoreMenu actions={actions} share={share} shareLink={shareLink} />
      </TableCell>
    </TableRow>
  );
}
