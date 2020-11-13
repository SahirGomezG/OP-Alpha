import { OnePagerData, OnePagerPublicData } from '../model/model';
import * as founders from './founders';
import * as investors from './investors';
import * as marketStats from  './marketStats';

/** An empty one pager, for initial React state */
export const EMPTY_ONE_PAGER: OnePagerData = {
  companyName: '',
  url: '',
  logo: '',
  industryTags: [],
  briefDescription: '',
  freebieVersion: true,
  founders: [],
  location: ''
};

const facebook: OnePagerData = {
  companyName: 'Facebook',
  url: 'facebook',
  logo: 'https://lh3.googleusercontent.com/9mJUVG8u2WOXNQ-ZH--Cz3DnLvq_TiJgwj3Hgw8ObGhTBWQio-8KaQdsM5SYk21F9HTPNyMO8GVhcBDVEkni1j02yMEi1lN6DAg4BA', 
  industryTags: ['Social Media', 'Messaging', 'Mobile'],
  location: 'Menlo Park, CA ',
  briefDescription:
    'Online social networking platform for users to connect with friends and family',
  freebieVersion: true,
  detailDescription:
    'Users can create a profile, share images and other media, send and accept friend requests. Largest social media with more than 2B users worldwide',
  fundraisingStage: 'Seed',
  fundraisingStageGoal: 500000,
  fundsRaisedInStage: 100000,
  fundraisingDetails: 'To transform from a school network to a public website',
  founders: [founders.facebook1, founders.facebook2, founders.facebook3],
  pitchVideoLink: 'https://www.youtube.com/watch?v=WzgNAN3dW-I',
  investors: [investors.investor2],
  marketStats: [marketStats.facebook1, marketStats.facebook2, marketStats.facebook3],
};

const lendingClub: OnePagerData = {
  companyName: 'Lending Club',
  url: 'lending-club',
  logo: 'https://lh3.googleusercontent.com/-mjU56kIGa3l9R1NfPYyEiAm8wek1IRAyiVmyfIHu763MOo70ItLjC1UpFANJFfQnKEPrUCNhvPhR87_oS7M8GaCAPTxlD8dewhXjw',
  industryTags: ['P2P', 'Consumer Lending', 'Finance'],
  location: 'San Francisco, CA ',
  briefDescription: 'P2P platform for creditworthy borrowers and lenders',
  freebieVersion: false,
  detailDescription:
    'Peer lending network that brings together creditworthy borrowers and investors for simpler borrowing and investing at better rates',
  fundraisingStage: 'Series B',
  fundraisingStageGoal: 12000000,
  fundsRaisedInStage: 5000000,
  fundraisingDetails: 'Expand capabilities and accelerate customer growth',
  founders: [founders.lendingClub1, founders.lendingClub2],
  investors: [investors.investor1],
  marketStats: [marketStats.lendingClub1, marketStats.lendingClub2, marketStats.lendingClub3],
};

const spotify: OnePagerData = {
  companyName: 'Spotify',
  url: 'spotify',
  logo: 'https://lh3.googleusercontent.com/Uafm4TZIofOFW99bF6pQgjFVuQqILbAzMf7c___BJUxqFDrsvp7br3dcybSYO0eZoeDWRuniBJeN4R3xNwEWuC8zwNdvAcd0vKpDHog',
  industryTags: ['music', 'streaming'],
  location: 'Stockholm, Sweden ',
  briefDescription: 'Ad-financed music streaming service	',
  freebieVersion: false,
  detailDescription:
    'Commercial streaming service that provides digital content from a wide range of artists. Users can search music, create, share playlists, and integrate social media accounts. Can be access on computers or mobile devices.',
  fundraisingStage: 'Series A',
  fundraisingStageGoal: 21600000,
  fundsRaisedInStage: 500000,
  fundraisingDetails: 'Grow music library and licenses, developers salaries',
  founders: [founders.spotify1, founders.spotify2],
  pitchVideoLink: 'https://www.youtube.com/watch?v=ZDXETBfXSuc&t=166s',
  investors: [investors.investor1],
  marketStats: [marketStats.spotify1, marketStats.spotify2, marketStats.spotify3],
};

const workday: OnePagerData = {
  companyName: 'Workday',
  url: 'workday',
  logo: 'https://lh3.googleusercontent.com/cKc4lv0Y6MEC43QOwdszzU-qa6nImb3qyamNblel6buWu9Pe52ApSRN7D2yy5zeVqzLNoCNxzDBIYAHyqfPU_hezUASlT68FlCuOKqC0',
  industryTags: ['SaaS', 'HR', 'Software'],
  location: 'Pleasanton, CA ',
  briefDescription: 'SaaS provider for enterprises',
  freebieVersion: false,
  detailDescription:
    'Provides human capital management, payroll, financial management software solutions for enterprises',
  fundraisingStage: 'Pre-Seed',
  fundraisingStageGoal: 15000000,
  fundsRaisedInStage: 1000000,
  fundraisingDetails: 'Develop software platform',
  founders: [founders.workday1, founders.workday2],
  investors: [investors.investor1, investors.investor2],
  marketStats: [marketStats.workday1, marketStats.workday2, marketStats.workday3],
};

const zynga: OnePagerData = {
  companyName: 'Zynga',
  url: 'zynga',
  logo: 'https://lh3.googleusercontent.com/ddrJaA08MOUFY9rfYJen4yQFZxXebDyEWnRip_PGhjdTQohdeOdfDH51xKWIZReZGEKd3hMkuFf1gQEpi_E-YE-CCrLa2Vjf0RdpE6Y',
  industryTags: ['Gaming', 'Mobile'],
  location: 'San Francisco, CA ',
  briefDescription: 'Develops and operates social games',
  freebieVersion: true,
  detailDescription:
    'Offers online social games such as Words With Friends, Zynga Poker and Farmville. Operates games on web, social networking sites and mobile platforms worldwide. Provides advertising services in its games.',
  fundraisingStage: 'Series B',
  fundraisingStageGoal: 29000000,
  fundsRaisedInStage: 10000000,
  fundraisingDetails: 'Game production, acquisition and marketing',
  founders: [founders.zynga1, founders.zynga2, founders.zynga3],
  pitchVideoLink: 'https://www.youtube.com/watch?v=HdVWHAPiqno',
  investors: [investors.investor1, investors.investor3],
  marketStats: [marketStats.zynga1, marketStats.zynga2, marketStats.zynga3],
};

/** Map of urls to full one pager data. */
export const ONE_PAGERS_ALL_DATA_MAP: Map<string, OnePagerData> = new Map([
  [facebook.url, facebook],
  [lendingClub.url, lendingClub],
  [spotify.url, spotify],
  [workday.url, workday],
  [zynga.url, zynga],
]);

/** Array of all public one pager data. */
export const ONE_PAGERS_PUBLIC_DATA_ARRAY: OnePagerPublicData[] = Array.from(
  ONE_PAGERS_ALL_DATA_MAP.values()
).map((onePager: OnePagerData) => {
  return {
    companyName: onePager.companyName,
    url: onePager.url,
    industryTags: onePager.industryTags,
    briefDescription: onePager.briefDescription,
    freebieVersion: onePager.freebieVersion
  };
});
