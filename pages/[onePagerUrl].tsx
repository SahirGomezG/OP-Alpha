import React, {useEffect} from 'react';
import Router from "next/router";

import { ONE_PAGERS_PUBLIC_DATA_ARRAY } from '../data/onepagers';
import { OnePager } from '../components/OnePager';
import { OnePagerPublicData } from '../model/model';
import { Spinner, Box } from '@chakra-ui/core';

type OnePagerPageData = {
  onePagerUrl: string;
};

/** Render a One Pager Page. */
function OnePagerPage({ onePagerUrl }: OnePagerPageData) {
  //const [onePagerData, setOnePager]: [OnePagerData, any] = React.useState( EMPTY_ONE_PAGER );
  return <OnePager onePagerUrl={onePagerUrl}></OnePager>;
}

export async function getStaticPaths() {
  const paths = ONE_PAGERS_PUBLIC_DATA_ARRAY.map(
    (onePager: OnePagerPublicData) => {
      return {
        params: {
          onePagerUrl: onePager.url,
        },
      };
    }
  );
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      onePagerUrl: params.onePagerUrl,
    },
  };
}

export default OnePagerPage;


/* useEffect(() => {
    getOnePagerData(onePagerUrl).then((result) => {
      setOnePager(result);
    });
  }, []);

  const paid = false;

  if (onePagerData.freebieVersion || paid){ 
    return <OnePager onePagerUrl={onePagerUrl}></OnePager>;
  } else {
    Router.push("/");
    return <Box textAlign="center"><Spinner/></Box>
  }*/