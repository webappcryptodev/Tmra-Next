// components
import { UploadSingleFile } from '@components/upload';
import { LoadingButton } from '@mui/lab';
import {
  Alert,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  FormControl,
  Grid,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useAppSelector } from '@redux/hooks';
import { app } from '@redux/slices/auth/realm';
import { useTranslation } from 'next-i18next';
import getConfig from 'next/config';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
// hooks
import useSettings from 'src/hooks/useSettings';
import RuntimeConfigs from '@utils/runtime-configs';
import { gql, useMutation, useQuery } from 'urql';

const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

const getAppearance = gql`
  query getAppearance($_id: ObjectId!) {
    nonprofitAppearance(query: { _id: $_id }) {
      _id
      ourStory
      whyShouldWe
      peopleSay
      mainImageUrl
      secondaryImage
      eventImagesUrl1
      eventImagesUrl2
      eventImagesUrl3
      detailStory1
      detailStory2
      detailStory3
      videoUrl
      whySupportUs1
      whySupportUs2
      whySupportUs3
    }
    organization(query: { _id: $_id }) {
      _id
      username
      name
    }
  }
`;

const updateLogo = gql`
  mutation updateFavIcon($_id: ObjectId!, $logo: String!) {
    updateOneNonprofitAppearance(query: { _id: $_id }, set: { logo: $logo }) {
      _id
      logo
    }
  }
`;
const updateMainImage = gql`
  mutation updateFavIcon($_id: ObjectId!, $mainImageUrl: String!) {
    updateOneNonprofitAppearance(query: { _id: $_id }, set: { mainImageUrl: $mainImageUrl }) {
      _id
      mainImageUrl
    }
  }
`;
const updateSecondaryImage = gql`
  mutation updateFavIcon($_id: ObjectId!, $secondaryImage: String!) {
    updateOneNonprofitAppearance(query: { _id: $_id }, set: { secondaryImage: $secondaryImage }) {
      _id
      secondaryImage
    }
  }
`;
const updateEventImagesUrl1 = gql`
  mutation updateFavIcon($_id: ObjectId!, $eventImagesUrl1: String!) {
    updateOneNonprofitAppearance(query: { _id: $_id }, set: { eventImagesUrl1: $eventImagesUrl1 }) {
      _id
      eventImagesUrl1
    }
  }
`;
const updateEventImagesUrl2 = gql`
  mutation updateFavIcon($_id: ObjectId!, $eventImagesUrl2: String!) {
    updateOneNonprofitAppearance(query: { _id: $_id }, set: { eventImagesUrl2: $eventImagesUrl2 }) {
      _id
      eventImagesUrl2
    }
  }
`;
const updateEventImagesUrl3 = gql`
  mutation updateFavIcon($_id: ObjectId!, $eventImagesUrl3: String!) {
    updateOneNonprofitAppearance(query: { _id: $_id }, set: { eventImagesUrl3: $eventImagesUrl3 }) {
      _id
      eventImagesUrl3
    }
  }
`;
const updateFavIcon = gql`
  mutation updateFavIcon($_id: ObjectId!, $favIcon: String!) {
    updateOneNonprofitAppearance(query: { _id: $_id }, set: { favIcon: $favIcon }) {
      _id
      favIcon
    }
  }
`;

const insertLandingPageAppearance = gql`
  mutation insertNonprofitAppearance(
    $_id: ObjectId!
    $ourStory: String!
    $whyShouldWe: String!
    $peopleSay: String!
    $ownerUserId: String!
    $ownerRealmId: ObjectId!
    $detailStory1: String!
    $detailStory2: String!
    $detailStory3: String!
    $videoUrl: String!
    $whySupportUs1: String!
    $whySupportUs2: String!
    $whySupportUs3: String!
  ) {
    insertOneNonprofitAppearance(
      data: {
        _id: $_id
        ourStory: $ourStory
        whyShouldWe: $whyShouldWe
        peopleSay: $peopleSay
        ownerUserId: $ownerUserId
        ownerRealmId: $ownerRealmId
        detailStory1: $detailStory1
        detailStory2: $detailStory2
        detailStory3: $detailStory3
        videoUrl: $videoUrl
        whySupportUs1: $whySupportUs1
        whySupportUs2: $whySupportUs2
        whySupportUs3: $whySupportUs3
      }
    ) {
      _id
      ownerRealmId
    }
  }
`;
const updateLandingPageAppearance = gql`
  mutation updateAppearance(
    $_id: ObjectId!
    $ourStory: String!
    $whyShouldWe: String!
    $peopleSay: String!
    $detailStory1: String!
    $detailStory2: String!
    $detailStory3: String!
    $videoUrl: String!
    $whySupportUs1: String!
    $whySupportUs2: String!
    $whySupportUs3: String!
  ) {
    updateOneNonprofitAppearance(
      query: { _id: $_id }
      set: {
        ourStory: $ourStory
        whyShouldWe: $whyShouldWe
        peopleSay: $peopleSay
        detailStory1: $detailStory1
        detailStory2: $detailStory2
        detailStory3: $detailStory3
        videoUrl: $videoUrl
        whySupportUs1: $whySupportUs1
        whySupportUs2: $whySupportUs2
        whySupportUs3: $whySupportUs3
      }
    ) {
      _id
      ownerRealmId
    }
  }
`;

const uploadImage = gql`
  mutation upImage(
    $imageName: String!
    $imageUrl: String!
    $imagePrefix: String!
    $imageExtension: String!
    $fullName: String!
    $currentPhoto: String!
  ) {
    uploadImage(
      input: {
        imageUrl: $imageUrl
        imageName: $imageName
        imagePrefix: $imagePrefix
        imageExtension: $imageExtension
        fullName: $fullName
        currentPhoto: $currentPhoto
      }
    ) {
      response
      path
    }
  }
`;

interface CustomFile extends File {
  path?: string;
  preview?: string;
}

interface AppearanceValues {
  ourStory: string;
  whyShouldWe: string;
  peopleSay: string;
  detailStory1: string;
  detailStory2: string;
  detailStory3: string;
  videoUrl: string;
  whySupportUs1: string;
  whySupportUs2: string;
  whySupportUs3: string;
  mainImageUrl: CustomFile | null;
  secondaryImage: CustomFile | null;
  eventImagesUrl1: CustomFile | null;
  eventImagesUrl2: CustomFile | null;
  eventImagesUrl3: CustomFile | null;
}

export default function AppearanceLanding() {
  const { themeStretch } = useSettings();
  const currentUser = useAppSelector(state => state.currentUser);
  const router = useRouter();
  const [value, setValues] = React.useState('1');
  const [loading, setLoading] = React.useState(false);
  const [isField, setField] = React.useState(false);
  const { handleSubmit, control, register, reset, setValue, getValues } = useForm<AppearanceValues>(
    {
      defaultValues: {
        ourStory: '',
        whyShouldWe: '',
        peopleSay: '',
        detailStory1: '',
        detailStory2: '',
        detailStory3: '',
        whySupportUs1: '',
        whySupportUs2: '',
        whySupportUs3: '',
        videoUrl: '',
        mainImageUrl: null,
        secondaryImage: null,
        eventImagesUrl1: null,
        eventImagesUrl2: null,
        eventImagesUrl3: null,
      },
    },
  );

  const [notif, setNotif] = React.useState({
    open: false,
    type: '',
  });
  const { open } = notif;
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValues(newValue);
  };
  const [resultUpdateLogo, updateOneLogo] = useMutation(updateLogo);
  const [resultUpdateMain, updateOneMainImage] = useMutation(updateMainImage);
  const [resultUpdateSecondary, updateOneSecondaryImage] = useMutation(updateSecondaryImage);
  const [resultUpdateEventImages1, updateOneEventImages1] = useMutation(updateEventImagesUrl1);
  const [resultUpdateEventImages2, updateOneEventImages2] = useMutation(updateEventImagesUrl2);
  const [resultUpdateEventImages3, updateOneEventImages3] = useMutation(updateEventImagesUrl3);
  const [resultUpdateFavIcon, updateOneFavIcon] = useMutation(updateFavIcon);
  const [resultUploadImage, UploadOneImage] = useMutation(uploadImage);
  const [resultUpdateLandingPage, updateOneLandingPage] = useMutation(updateLandingPageAppearance);
  const [resultInsertLandingPage, insertOneLandingPage] = useMutation(insertLandingPageAppearance);

  const handleDropMain = React.useCallback(
    acceptedFiles => {
      setValue('mainImageUrl', acceptedFiles[0]);
    },
    [setValue],
  );
  const handleDropSecond = React.useCallback(
    acceptedFiles => {
      setValue('secondaryImage', acceptedFiles[0]);
    },
    [setValue],
  );
  const handleDropEvent1 = React.useCallback(
    acceptedFiles => {
      setValue('eventImagesUrl1', acceptedFiles[0]);
    },
    [setValue],
  );
  const handleDropEvent2 = React.useCallback(
    acceptedFiles => {
      setValue('eventImagesUrl2', acceptedFiles[0]);
    },
    [setValue],
  );
  const handleDropEvent3 = React.useCallback(
    acceptedFiles => {
      setValue('eventImagesUrl3', acceptedFiles[0]);
    },
    [setValue],
  );
  const [nonprofitRes, reexecuteQuery] = useQuery<{
    organization: {
      _id: string;
      paypalClientId: string;
      defaultCurrency: string;
      xenditMode: string;
      username: string;
      name: string;
    };
    nonprofitAppearance: {
      ourStory: string;
      whyShouldWe: string;
      peopleSay: string;
      mainImageUrl: string;
      secondaryImage: string;
      eventImagesUrl1: string;
      eventImagesUrl2: string;
      eventImagesUrl3: string;
      detailStory1: string;
      detailStory2: string;
      detailStory3: string;
      videoUrl: string;
      whySupportUs1: string;
      whySupportUs2: string;
      whySupportUs3: string;
    };
    // user: { firstname: string; lastname: string };
  }>({
    query: getAppearance,
    variables: { _id: router.query.organizationId },
  });
  const refresh = () => {
    reexecuteQuery({ requestPolicy: 'network-only' });
  };
  const { data, fetching, error } = nonprofitRes;
  useEffect(() => {
    if (data && fetching === false && isField === false) {
      if (data.nonprofitAppearance) {
        reset({
          ourStory: data.nonprofitAppearance.ourStory,
          whyShouldWe: data.nonprofitAppearance.whyShouldWe,
          peopleSay: data.nonprofitAppearance.peopleSay,
          detailStory1: data.nonprofitAppearance.detailStory1,
          detailStory2: data.nonprofitAppearance.detailStory2,
          detailStory3: data.nonprofitAppearance.detailStory3,
          whySupportUs1: data.nonprofitAppearance.whySupportUs1,
          whySupportUs2: data.nonprofitAppearance.whySupportUs2,
          whySupportUs3: data.nonprofitAppearance.whySupportUs3,
          videoUrl: data.nonprofitAppearance.videoUrl,
        });
      }

      setField(true);
    }
  }, [data, fetching, reset, isField]);
  const { t } = useTranslation();
  const handleClose = () => {
    setNotif({ open: false, type: '' });
  };

  const getBase64 = async (file: any) => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          let encoded = reader.result!.toString().replace(/^data:(.*,)?/, '');
          // var data = reader.result!.replace;
          if (encoded.length % 4 > 0) {
            encoded += '='.repeat(4 - (encoded.length % 4));
          }
          // var buf = Buffer.from(encoded, 'base64');
          resolve(encoded);
        };
      });
    }

    return src;
  };

  function makeid(length: any) {
    const result: string[] = [];
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
    }
    return result.join('');
  }

  const handleLandingPage = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    console.log(e);
    let variables = {};
    if (data?.nonprofitAppearance) {
      variables = {
        _id: router.query.organizationId,
        ourStory: getValues('ourStory') ? getValues('ourStory') : '',
        whyShouldWe: getValues('whyShouldWe') ? getValues('whyShouldWe') : '',
        peopleSay: getValues('peopleSay') ? getValues('peopleSay') : '',
        detailStory1: getValues('detailStory1') ? getValues('detailStory1') : '',
        detailStory2: getValues('detailStory2') ? getValues('detailStory2') : '',
        detailStory3: getValues('detailStory3') ? getValues('detailStory3') : '',
        videoUrl: getValues('videoUrl') ? getValues('videoUrl') : '',
        whySupportUs1: getValues('whySupportUs1') ? getValues('whySupportUs1') : '',
        whySupportUs2: getValues('whySupportUs2') ? getValues('whySupportUs2') : '',
        whySupportUs3: getValues('whySupportUs3') ? getValues('whySupportUs3') : '',
      };
      const resp = await updateOneLandingPage(variables);
      if (resp) {
        if (getValues('mainImageUrl')) {
          const rand = makeid(4);
          const fullName = `${`${currentUser.firstName} ${currentUser.lastName}`}`;
          const imageExtension = `.${getValues('mainImageUrl')?.name.split('.').pop()}`;
          const upload = await getBase64(getValues('mainImageUrl'));
          const profilePictureName = `${router.query.organizationId}-${rand}` || '';
          variables = {
            imageUrl: upload,
            imageName: profilePictureName,
            imagePrefix: '',
            fullName,
            imageExtension,
            currentPhoto:
              data?.nonprofitAppearance && data.nonprofitAppearance.mainImageUrl
                ? data.nonprofitAppearance.mainImageUrl
                : '',
          };
          const uploadTheImage = await UploadOneImage(variables);
          if (uploadTheImage) {
            variables = {
              _id: router.query.organizationId,
              mainImageUrl: uploadTheImage.data?.uploadImage?.path,
            };
            const updateImage = await updateOneMainImage(variables);
            console.log('update image in database', updateImage);
          }
        }
        if (getValues('secondaryImage')) {
          const rand = makeid(4);
          const fullName = `${`${currentUser.firstName} ${currentUser.lastName}`}`;
          const imageExtension = `.${getValues('secondaryImage')?.name.split('.').pop()}`;
          const upload = await getBase64(getValues('secondaryImage'));
          const profilePictureName = `${router.query.organizationId}-${rand}` || '';
          variables = {
            imageUrl: upload,
            imageName: profilePictureName,
            imagePrefix: '',
            fullName,
            imageExtension,
            currentPhoto: data?.nonprofitAppearance ? data.nonprofitAppearance.secondaryImage : '',
          };
          const uploadTheImage = await UploadOneImage(variables);
          if (uploadTheImage) {
            variables = {
              _id: router.query.organizationId,
              secondaryImage: uploadTheImage.data?.uploadImage?.path,
            };
            const updateImage = await updateOneSecondaryImage(variables);
            console.log('update image in database', updateImage);
          }
        }
        if (getValues('eventImagesUrl1')) {
          const rand = makeid(4);
          const fullName = `${`${currentUser.firstName} ${currentUser.lastName}`}`;
          const imageExtension = `.${getValues('eventImagesUrl1')?.name.split('.').pop()}`;
          const upload = await getBase64(getValues('eventImagesUrl1'));
          const profilePictureName = `${router.query.organizationId}-${rand}` || '';
          variables = {
            imageUrl: upload,
            imageName: profilePictureName,
            imagePrefix: '',
            fullName,
            imageExtension,
            currentPhoto: data?.nonprofitAppearance ? data.nonprofitAppearance.eventImagesUrl1 : '',
          };
          const uploadTheImage = await UploadOneImage(variables);
          if (uploadTheImage) {
            variables = {
              _id: router.query.organizationId,
              eventImagesUrl1: uploadTheImage.data?.uploadImage?.path,
            };
            const updateImage = await updateOneEventImages1(variables);
            console.log('update image in database', updateImage);
          }
        }
        if (getValues('eventImagesUrl2')) {
          const rand = makeid(4);
          const fullName = `${`${currentUser.firstName} ${currentUser.lastName}`}`;
          const imageExtension = `.${getValues('eventImagesUrl2')?.name.split('.').pop()}`;
          const upload = await getBase64(getValues('eventImagesUrl2'));
          const profilePictureName = `${router.query.organizationId}-${rand}` || '';
          variables = {
            imageUrl: upload,
            imageName: profilePictureName,
            imagePrefix: '',
            fullName,
            imageExtension,
            currentPhoto: data?.nonprofitAppearance ? data.nonprofitAppearance.eventImagesUrl2 : '',
          };
          const uploadTheImage = await UploadOneImage(variables);
          if (uploadTheImage) {
            variables = {
              _id: router.query.organizationId,
              eventImagesUrl2: uploadTheImage.data?.uploadImage?.path,
            };
            const updateImage = await updateOneEventImages2(variables);
            console.log('update image in database', updateImage);
          }
        }
        if (getValues('eventImagesUrl3')) {
          const rand = makeid(4);
          const fullName = `${`${currentUser.firstName} ${currentUser.lastName}`}`;
          const imageExtension = `.${getValues('eventImagesUrl3')?.name.split('.').pop()}`;
          const upload = await getBase64(getValues('eventImagesUrl3'));
          const profilePictureName = `${router.query.organizationId}-${rand}` || '';
          variables = {
            imageUrl: upload,
            imageName: profilePictureName,
            imagePrefix: '',
            fullName,
            imageExtension,
            currentPhoto: data?.nonprofitAppearance ? data.nonprofitAppearance.eventImagesUrl3 : '',
          };
          const uploadTheImage = await UploadOneImage(variables);
          if (uploadTheImage) {
            variables = {
              _id: router.query.organizationId,
              eventImagesUrl3: uploadTheImage.data?.uploadImage?.path,
            };
            const updateImage = await updateOneEventImages3(variables);
            console.log('update image in database', updateImage);
          }
        }
        refresh();
        setNotif({
          open: true,
          type: 'Landing page is Updated',
        });
      }
    } else {
      variables = {
        _id: router.query.organizationId,
        ownerRealmId: app.currentUser?.id,
        ownerUserId: app.currentUser?.profile.ssoId,
        detailStory1: getValues('detailStory1'),
        detailStory2: getValues('detailStory2'),
        detailStory3: getValues('detailStory3'),
        videoUrl: getValues('videoUrl'),
        whySupportUs1: getValues('whySupportUs1'),
        whySupportUs2: getValues('whySupportUs2'),
        whySupportUs3: getValues('whySupportUs3'),
      };
      await insertOneLandingPage(variables);
      if (getValues('mainImageUrl')) {
        const rand = makeid(4);
        const fullName = `${`${currentUser.firstName} ${currentUser.lastName}`}`;
        const imageExtension = `.${getValues('mainImageUrl')?.name.split('.').pop()}`;
        const upload = await getBase64(getValues('mainImageUrl'));
        const profilePictureName = `${router.query.organizationId}-${rand}` || '';
        variables = {
          imageUrl: upload,
          imageName: profilePictureName,
          imagePrefix: '',
          fullName,
          imageExtension,
          currentPhoto: data?.nonprofitAppearance ? data.nonprofitAppearance.mainImageUrl : '',
        };
        console.log('Variable', variables);
        const uploadTheImage = await UploadOneImage(variables);
        console.log('Upload Image', uploadTheImage);
        if (uploadTheImage) {
          variables = {
            _id: router.query.organizationId,
            mainImageUrl: uploadTheImage.data.uploadImage.path,
          };
          const updateImage = await updateOneMainImage(variables);
          console.log('update image in database', updateImage);
        }
      }
      if (getValues('secondaryImage')) {
        const rand = makeid(4);
        const fullName = `${`${currentUser.firstName} ${currentUser.lastName}`}`;
        const imageExtension = `.${getValues('secondaryImage')?.name.split('.').pop()}`;
        const upload = await getBase64(getValues('secondaryImage'));
        const profilePictureName = `${router.query.organizationId}-${rand}` || '';
        variables = {
          imageUrl: upload,
          imageName: profilePictureName,
          imagePrefix: '',
          fullName,
          imageExtension,
          currentPhoto: data?.nonprofitAppearance ? data.nonprofitAppearance.secondaryImage : '',
        };
        const uploadTheImage = await UploadOneImage(variables);
        if (uploadTheImage) {
          variables = {
            _id: router.query.organizationId,
            secondaryImage: uploadTheImage.data.uploadImage.path,
          };
          const updateImage = await updateOneSecondaryImage(variables);
          console.log('update image in database', updateImage);
        }
      }
      if (getValues('eventImagesUrl1')) {
        const rand = makeid(4);
        const fullName = `${`${currentUser.firstName} ${currentUser.lastName}`}`;
        const imageExtension = `.${getValues('eventImagesUrl1')?.name.split('.').pop()}`;
        const upload = await getBase64(getValues('eventImagesUrl1'));
        const profilePictureName = `${router.query.organizationId}-${rand}` || '';
        variables = {
          imageUrl: upload,
          imageName: profilePictureName,
          imagePrefix: '',
          fullName,
          imageExtension,
          currentPhoto: data?.nonprofitAppearance ? data.nonprofitAppearance.eventImagesUrl1 : '',
        };
        const uploadTheImage = await UploadOneImage(variables);
        if (uploadTheImage) {
          variables = {
            _id: router.query.organizationId,
            eventImagesUrl1: uploadTheImage.data.uploadImage.path,
          };
          const updateImage = await updateOneEventImages1(variables);
          console.log('update image in database', updateImage);
        }
      }
      if (getValues('eventImagesUrl2')) {
        const rand = makeid(4);
        const fullName = `${`${currentUser.firstName} ${currentUser.lastName}`}`;
        const imageExtension = `.${getValues('eventImagesUrl2')?.name.split('.').pop()}`;
        const upload = await getBase64(getValues('eventImagesUrl2'));
        const profilePictureName = `${router.query.organizationId}-${rand}` || '';
        variables = {
          imageUrl: upload,
          imageName: profilePictureName,
          imagePrefix: '',
          fullName,
          imageExtension,
          currentPhoto: data?.nonprofitAppearance ? data.nonprofitAppearance.eventImagesUrl2 : '',
        };
        const uploadTheImage = await UploadOneImage(variables);
        if (uploadTheImage) {
          variables = {
            _id: router.query.organizationId,
            eventImagesUrl2: uploadTheImage.data.uploadImage.path,
          };
          const updateImage = await updateOneEventImages2(variables);
          console.log('update image in database', updateImage);
        }
      }
      if (getValues('eventImagesUrl3')) {
        const rand = makeid(4);
        const fullName = `${`${currentUser.firstName} ${currentUser.lastName}`}`;
        const imageExtension = `.${getValues('eventImagesUrl3')?.name.split('.').pop()}`;
        const upload = await getBase64(getValues('eventImagesUrl3'));
        const profilePictureName = `${router.query.organizationId}-${rand}` || '';
        variables = {
          imageUrl: upload,
          imageName: profilePictureName,
          imagePrefix: '',
          fullName,
          imageExtension,
          currentPhoto: data?.nonprofitAppearance ? data.nonprofitAppearance.eventImagesUrl3 : '',
        };
        const uploadTheImage = await UploadOneImage(variables);
        if (uploadTheImage) {
          variables = {
            _id: router.query.organizationId,
            eventImagesUrl3: uploadTheImage.data.uploadImage.path,
          };
          const updateImage = await updateOneEventImages3(variables);
          console.log('update image in database', updateImage);
        }
      }
      refresh();
      setNotif({
        open: true,
        type: 'Landing page is Updated',
      });
    }
    setLoading(false);
  };

  const deleteImage = async (url: any, type: string) => {
    setLoading(true);
    const resp = await app.currentUser?.callFunction('deleteImageBunny', {
      url: url,
    });
    console.log(resp);
    console.log('delete image result', resp);
    if (resp) {
      if (type === 'logo') {
        const variables = {
          _id: router.query.organizationId,
          logo: '',
        };
        const updateTheLogo = await updateOneLogo(variables);
        console.log('delete logo result', updateTheLogo);
        if (updateTheLogo) {
          setNotif({
            open: true,
            type: 'Logo is deleted',
          });
          refresh();
        }
      }
      if (type === 'mainImage') {
        const variables = {
          _id: router.query.organizationId,
          mainImageUrl: '',
        };
        const updateTheImage = await updateOneMainImage(variables);
        console.log('delete main image result', updateTheImage);
        if (updateTheImage) {
          setNotif({
            open: true,
            type: 'Main image is deleted',
          });
          refresh();
        }
      }
      if (type === 'secondaryImage') {
        const variables = {
          _id: router.query.organizationId,
          secondaryImage: '',
        };
        const updateTheImage = await updateOneSecondaryImage(variables);
        console.log('delete image result', updateTheImage);
        if (updateTheImage) {
          setNotif({
            open: true,
            type: 'Secondary image is deleted',
          });
          refresh();
        }
      }
      if (type === 'eventImagesUrl1') {
        const variables = {
          _id: router.query.organizationId,
          eventImagesUrl1: '',
        };
        const updateTheImage = await updateOneEventImages1(variables);
        console.log('delete image result', updateTheImage);
        if (updateTheImage) {
          setNotif({
            open: true,
            type: 'Event image (1) is deleted',
          });
          refresh();
        }
      }
      if (type === 'eventImagesUrl2') {
        const variables = {
          _id: router.query.organizationId,
          eventImagesUrl2: '',
        };
        const updateTheImage = await updateOneEventImages2(variables);
        console.log('delete image result', updateTheImage);
        if (updateTheImage) {
          setNotif({
            open: true,
            type: 'Event image (2) is deleted',
          });
          refresh();
        }
      }
      if (type === 'eventImagesUrl3') {
        const variables = {
          _id: router.query.organizationId,
          eventImagesUrl3: '',
        };
        const updateTheImage = await updateOneEventImages3(variables);
        console.log('delete image result', updateTheImage);
        if (updateTheImage) {
          setNotif({
            open: true,
            type: 'Event image (3) is deleted',
          });
          refresh();
        }
      }
      if (type === 'favIcon') {
        const variables = {
          _id: router.query.organizationId,
          favIcon: '',
        };
        const updateTheImage = await updateOneFavIcon(variables);
        console.log('delete image result', updateTheImage);
        if (updateTheImage) {
          setNotif({
            open: true,
            type: 'Fav icon is deleted',
          });
          refresh();
        }
      }
    }
    setLoading(false);
  };

  return (
    <Stack>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          {notif.type}
        </Alert>
      </Snackbar>
      <Card sx={{ p: 5 }}>
        <form onSubmit={handleLandingPage}>
          <Stack spacing={3}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Controller
                  name="ourStory"
                  control={control}
                  render={({ field, fieldState }) => (
                    <FormControl sx={{ width: '100%' }}>
                      <label htmlFor="contained-button-file">
                        <p
                          style={{
                            display: 'block',
                            color: '#637381',
                            marginBottom: 5,
                            fontSize: 18,
                          }}
                        >
                          Tittle Story
                        </p>
                      </label>
                      <span style={{ fontSize: 13 }}>
                        Please insert for each section tittle bellow :
                      </span>
                      <TextField
                        style={{ marginTop: 8 }}
                        fullWidth
                        multiline
                        inputProps={{ maxLength: 119 }}
                        label={t('Our Story')}
                        {...field}
                        error={Boolean(fieldState.invalid && fieldState.error)}
                      />
                    </FormControl>
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="whyShouldWe"
                  control={control}
                  render={({ field, fieldState }) => (
                    <TextField
                      fullWidth
                      multiline
                      inputProps={{ maxLength: 119 }}
                      label={t('Why Should We')}
                      {...field}
                      error={Boolean(fieldState.invalid && fieldState.error)}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="peopleSay"
                  control={control}
                  render={({ field, fieldState }) => (
                    <TextField
                      fullWidth
                      multiline
                      rows={5}
                      inputProps={{ maxLength: 250 }}
                      label={t('What people says about us')}
                      {...field}
                      error={Boolean(fieldState.invalid && fieldState.error)}
                    />
                  )}
                />
              </Grid>
              <Grid item md={4} sm={6} xs={12}>
                <Controller
                  name="detailStory1"
                  control={control}
                  render={({ field, fieldState }) => (
                    <TextField
                      fullWidth
                      multiline
                      label={t('Story (1)')}
                      {...field}
                      error={Boolean(fieldState.invalid && fieldState.error)}
                    />
                  )}
                />
              </Grid>
              <Grid item md={4} sm={6} xs={12}>
                <Controller
                  name="detailStory2"
                  control={control}
                  render={({ field, fieldState }) => (
                    <TextField
                      fullWidth
                      multiline
                      label={t('Story (2)')}
                      {...field}
                      error={Boolean(fieldState.invalid && fieldState.error)}
                    />
                  )}
                />
              </Grid>
              <Grid item md={4} sm={12} xs={12}>
                <Controller
                  name="detailStory3"
                  control={control}
                  render={({ field, fieldState }) => (
                    <TextField
                      fullWidth
                      multiline
                      label={t('Story (3)')}
                      {...field}
                      error={Boolean(fieldState.invalid && fieldState.error)}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="videoUrl"
                  control={control}
                  render={({ field, fieldState }) => (
                    <TextField
                      fullWidth
                      multiline
                      label={t('Video url')}
                      {...field}
                      error={Boolean(fieldState.invalid && fieldState.error)}
                    />
                  )}
                />
              </Grid>
              <Grid item md={4} sm={6} xs={12}>
                <Controller
                  name="whySupportUs1"
                  control={control}
                  render={({ field, fieldState }) => (
                    <TextField
                      fullWidth
                      multiline
                      label={t('Why us? (1)')}
                      {...field}
                      error={Boolean(fieldState.invalid && fieldState.error)}
                    />
                  )}
                />
              </Grid>
              <Grid item md={4} sm={6} xs={12}>
                <Controller
                  name="whySupportUs2"
                  control={control}
                  render={({ field, fieldState }) => (
                    <TextField
                      fullWidth
                      multiline
                      label={t('Why us? (2)')}
                      {...field}
                      error={Boolean(fieldState.invalid && fieldState.error)}
                    />
                  )}
                />
              </Grid>
              <Grid item md={4} sm={12} xs={12}>
                <Controller
                  name="whySupportUs3"
                  control={control}
                  render={({ field, fieldState }) => (
                    <TextField
                      fullWidth
                      multiline
                      label={t('Why us? (3)')}
                      {...field}
                      error={Boolean(fieldState.invalid && fieldState.error)}
                    />
                  )}
                />
              </Grid>
              {data?.nonprofitAppearance && data?.nonprofitAppearance.mainImageUrl ? (
                <Grid item xs={12}>
                  <Card sx={{ width: '100%' }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={
                        publicRuntimeConfig.bunny.cdn.urlMedia +
                        '/' +
                        data.nonprofitAppearance.mainImageUrl +
                        '?width=500'
                      }
                      alt="member"
                      sx={{ width: '100%', margin: '0 auto' }}
                    />
                    <CardContent>
                      <Typography
                        sx={{
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                        }}
                        gutterBottom
                        variant="h6"
                        component="div"
                      >
                        Main image
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ float: 'right' }}>
                      <Button
                        onClick={() => {
                          deleteImage(data.nonprofitAppearance.mainImageUrl, 'mainImage');
                        }}
                        size="small"
                      >
                        Delete
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ) : (
                <Controller
                  name="mainImageUrl"
                  control={control}
                  render={({ field, fieldState }) => (
                    <FormControl sx={{ margin: 2, width: '100%' }}>
                      <label htmlFor="contained-button-file">
                        <p
                          style={{
                            display: 'block',
                            color: '#637381',
                            marginBottom: 5,
                          }}
                        >
                          Main image
                        </p>
                      </label>
                      <UploadSingleFile
                        maxSize={3145728}
                        accept="image/*"
                        file={field.value}
                        onDrop={handleDropMain}
                        error={Boolean(fieldState.invalid && fieldState.error)}
                      />
                    </FormControl>
                  )}
                />
              )}
              {data?.nonprofitAppearance && data?.nonprofitAppearance.secondaryImage ? (
                <Grid item xs={12}>
                  <Card sx={{ width: '100%' }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={
                        publicRuntimeConfig.bunny.cdn.urlMedia +
                        '/' +
                        data.nonprofitAppearance.secondaryImage +
                        '?width=500'
                      }
                      alt="member"
                      sx={{ width: '100%', margin: '0 auto' }}
                    />
                    <CardContent>
                      <Typography
                        sx={{
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                        }}
                        gutterBottom
                        variant="h6"
                        component="div"
                      >
                        Secondary image
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ float: 'right' }}>
                      <Button
                        onClick={() => {
                          deleteImage(data.nonprofitAppearance.secondaryImage, 'secondaryImage');
                        }}
                        size="small"
                      >
                        Delete
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ) : (
                <Controller
                  name="secondaryImage"
                  control={control}
                  render={({ field, fieldState }) => (
                    <FormControl sx={{ margin: 2, width: '100%' }}>
                      <label htmlFor="contained-button-file">
                        <p
                          style={{
                            display: 'block',
                            color: '#637381',
                            marginBottom: 5,
                          }}
                        >
                          Secondary image
                        </p>
                      </label>
                      <UploadSingleFile
                        maxSize={3145728}
                        accept="image/*"
                        file={field.value}
                        onDrop={handleDropSecond}
                        error={Boolean(fieldState.invalid && fieldState.error)}
                      />
                    </FormControl>
                  )}
                />
              )}
              {/* event image */}
              {data?.nonprofitAppearance && data?.nonprofitAppearance.eventImagesUrl1 ? (
                <Grid item sm={4} xs={12}>
                  <Card sx={{ width: '100%' }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={
                        publicRuntimeConfig.bunny.cdn.urlMedia +
                        '/' +
                        data.nonprofitAppearance.eventImagesUrl1 +
                        '?width=500'
                      }
                      alt="member"
                      sx={{ width: '100%', margin: '0 auto' }}
                    />
                    <CardContent>
                      <Typography
                        sx={{
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                        }}
                        gutterBottom
                        variant="h6"
                        component="div"
                      >
                        Event image (1)
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ float: 'right' }}>
                      <Button
                        onClick={() => {
                          deleteImage(data.nonprofitAppearance.eventImagesUrl1, 'eventImagesUrl1');
                        }}
                        size="small"
                      >
                        Delete
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ) : (
                <Controller
                  name="eventImagesUrl1"
                  control={control}
                  render={({ field, fieldState }) => (
                    <FormControl sx={{ margin: 2, width: '100%' }}>
                      <label htmlFor="contained-button-file">
                        <p
                          style={{
                            display: 'block',
                            color: '#637381',
                            marginBottom: 5,
                          }}
                        >
                          Event image (1)
                        </p>
                      </label>
                      <UploadSingleFile
                        maxSize={3145728}
                        accept="image/*"
                        file={field.value}
                        onDrop={handleDropEvent1}
                        error={Boolean(fieldState.invalid && fieldState.error)}
                      />
                    </FormControl>
                  )}
                />
              )}
              {data?.nonprofitAppearance && data?.nonprofitAppearance.eventImagesUrl2 ? (
                <Grid item sm={4} xs={12}>
                  <Card sx={{ width: '100%' }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={
                        publicRuntimeConfig.bunny.cdn.urlMedia +
                        '/' +
                        data.nonprofitAppearance.eventImagesUrl2 +
                        '?width=500'
                      }
                      alt="member"
                      sx={{ width: '100%', margin: '0 auto' }}
                    />
                    <CardContent>
                      <Typography
                        sx={{
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                        }}
                        gutterBottom
                        variant="h6"
                        component="div"
                      >
                        Event image (2)
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ float: 'right' }}>
                      <Button
                        onClick={() => {
                          deleteImage(data.nonprofitAppearance.eventImagesUrl2, 'eventImagesUrl2');
                        }}
                        size="small"
                      >
                        Delete
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ) : (
                <Controller
                  name="eventImagesUrl2"
                  control={control}
                  render={({ field, fieldState }) => (
                    <FormControl sx={{ margin: 2, width: '100%' }}>
                      <label htmlFor="contained-button-file">
                        <p
                          style={{
                            display: 'block',
                            color: '#637381',
                            marginBottom: 5,
                          }}
                        >
                          Event image (2)
                        </p>
                      </label>
                      <UploadSingleFile
                        maxSize={3145728}
                        accept="image/*"
                        file={field.value}
                        onDrop={handleDropEvent2}
                        error={Boolean(fieldState.invalid && fieldState.error)}
                      />
                    </FormControl>
                  )}
                />
              )}
              {data?.nonprofitAppearance && data?.nonprofitAppearance.eventImagesUrl3 ? (
                <Grid item sm={4} xs={12}>
                  <Card sx={{ width: '100%' }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={
                        publicRuntimeConfig.bunny.cdn.urlMedia +
                        '/' +
                        data.nonprofitAppearance.eventImagesUrl3 +
                        '?width=500'
                      }
                      alt="member"
                      sx={{ width: '100%', margin: '0 auto' }}
                    />
                    <CardContent>
                      <Typography
                        sx={{
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                        }}
                        gutterBottom
                        variant="h6"
                        component="div"
                      >
                        Event image (3)
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ float: 'right' }}>
                      <Button
                        onClick={() => {
                          deleteImage(data.nonprofitAppearance.eventImagesUrl3, 'eventImagesUrl3');
                        }}
                        size="small"
                      >
                        Delete
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ) : (
                <Controller
                  name="eventImagesUrl3"
                  control={control}
                  render={({ field, fieldState }) => (
                    <FormControl sx={{ margin: 2, width: '100%' }}>
                      <label htmlFor="contained-button-file">
                        <p
                          style={{
                            display: 'block',
                            color: '#637381',
                            marginBottom: 5,
                          }}
                        >
                          Event image (3)
                        </p>
                      </label>
                      <UploadSingleFile
                        maxSize={3145728}
                        accept="image/*"
                        file={field.value}
                        onDrop={handleDropEvent3}
                        error={Boolean(fieldState.invalid && fieldState.error)}
                      />
                    </FormControl>
                  )}
                />
              )}
            </Grid>
          </Stack>
          <LoadingButton
            loading={loading}
            sx={{ marginTop: 2, width: '100%' }}
            type="submit"
            variant="outlined"
            color="primary"
          >
            Update
          </LoadingButton>
        </form>
      </Card>
    </Stack>
  );
}
