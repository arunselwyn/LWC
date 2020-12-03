import SOCIAL from '@salesforce/resourceUrl/Social';
import arun from '@salesforce/resourceUrl/Arun';
export const PROFILE_IMAGE = arun

export const SOCIAL_LINKS = [
    {
        type: "linkedin",
        label: "linkedin/arunallwyn",
        link: "www.linkedin.com/in/arun-allwyn-1870657b",
        icon: SOCIAL + '/SOCIAL/linkedin.svg'
    },
    {
        type: "Trailhead",
        label: "trailhead/arun S",
        link: "https://trailblazer.me/id/aruns6",
        icon: SOCIAL + '/SOCIAL/trailhead.svg'
    }

]

export const USER_DETAILS = {
    NAME: 'Arun Allwyn S',
    ROLE: 'Salesforce Developer',
    EMAIL: 'arun.selwyn@gmail.com'
}