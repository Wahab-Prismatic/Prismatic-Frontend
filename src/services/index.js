import FounderImg from '../assets/images/M-safdar.webp';
import KashifImg from "../assets/images/kashif_1.webp";
import WaliImg from '../assets/images/Shahbaz Wali Muhammad.jpg'
import AsmaImg from '../assets/images/asma-dawood-pic.jpeg';
import NoumanImg from '../assets/images/M.Nouman.webp';
import RoufImg from '../assets/images/A-rouf.webp';
import BilalImg from '../assets/images/b-javaid.webp';
import TourActivityImg from '../assets/activity-images/tour-activity-new.jpeg';
import UpdatedBannerImg from '../assets/prismatic-activity-images/updated-banner.jpeg';
import PictureTourImg from '../assets/prismatic-activity-images/Picture-tour.jpg';
import PictureTourImg2 from '../assets/prismatic-activity-images/Picture-tour-2.jpg';
import questLogo from '../assets/images/clients/quest-logo.webp';
import gulabdeviLogo from '../assets/images/clients/gulabdevi.webp';
import PNYLogo from '../assets/images/clients/PNY Trainings.webp';
import MukabbirLogo from '../assets/images/clients/Mukabbir.webp';
import Logo20 from '../assets/images/clients/Logos-20.webp';
import CVImg from '../assets/images/HRMS/CV.webp';
import DatabaseImg from '../assets/images/HRMS/Database.webp';
import GrowthImg from '../assets/images/HRMS/Growth.webp';
import CalendarImg from '../assets/images/HRMS/Calendar.webp';
import SalaryImg from '../assets/images/HRMS/Salary.webp';
import GearImg from '../assets/images/HRMS/Gear.webp';
import HandshakeImg from '../assets/images/HRMS/Handshake.webp';
import SignUpImg from '../assets/images/HRMS/sign up.png';
import CustomizeImg from '../assets/images/HRMS/customize.png';
import IntegrateImg from '../assets/images/HRMS/integrate.png';
import DeployImg from '../assets/images/HRMS/deploy.png';
import OptimizeImg from '../assets/images/HRMS/optimize.png';
import DunkinImg from '../assets/portfolio-images/website-portfolio/dunkin.jpg';
import WinbidImg from '../assets/portfolio-images/website-portfolio/winbid.jpg';
import TopFixImg from '../assets/portfolio-images/website-portfolio/topfix.jpg';
import TimeCrimeImg from '../assets/portfolio-images/website-portfolio/timesCrimes.jpg';
import TechzImg from '../assets/portfolio-images/website-portfolio/techzology.jpg';
import PetanduImg from '../assets/portfolio-images/website-portfolio/petandu.jpg';
import JfosterImg from '../assets/portfolio-images/website-portfolio/jfoster.jpg';
import AamcImg from '../assets/portfolio-images/website-portfolio/aamc.jpg';

export const portfolioImages = [
  { id: 1, src: DunkinImg, alt: "Dunkin" },
  { id: 2, src: WinbidImg, alt: "WinBid" },
  { id: 3, src: TopFixImg, alt: "TopFix" },
  { id: 4, src: TimeCrimeImg, alt: "Times Crimes" },
  { id: 5, src: TechzImg, alt: "Techzology" },
  { id: 6, src: PetanduImg, alt: "PetAndu" },
  { id: 7, src: JfosterImg, alt: "JFoster" },
  { id: 8, src: AamcImg, alt: "AAMC" }
];

export const stepsData = [
  {
      imgSrc: SignUpImg,
      title: 'Sign Up',
      description: 'Protect sensitive HR data with role-based access controls.'
  },
  {
      imgSrc: CustomizeImg,
      title: 'Customize',
      description: 'Tailor the software to match your company’s HR processes.'
  },
  {
      imgSrc: IntegrateImg,
      title: 'Integrate',
      description: 'Connect with your existing tools for a seamless experience.'
  },
  {
      imgSrc: DeployImg,
      title: 'Deploy',
      description: 'Roll out the software to your team with our easy onboarding process.'
  },
  {
      imgSrc: OptimizeImg,
      title: 'Optimize',
      description: 'Use real-time analytics and reporting to continuously improve your HR strategies.'
  },
];

export const logoData = [
  { src: CVImg, alt: 'HRIS-logo', label: 'HRIS' },
  { src: DatabaseImg, alt: 'Database-logo', label: 'Database' },
  { src: GrowthImg, alt: 'Growth-logo', label: 'Performance' },
  { src: CalendarImg, alt: 'Calendar-logo', label: 'Attendance' },
  { src: SalaryImg, alt: 'Salary-logo', label: 'Payroll' },
  { src: GearImg, alt: 'Gear-logo', label: 'Operations' },
  { src: HandshakeImg, alt: 'Handshake-logo', label: 'Onboard' },
];

export const teamData = [
  {
    name: "Muhammad Safdar",
    position: "Co Founder",
    imgSrc: FounderImg,
    linkedInLink: "https://www.linkedin.com/in/safder-muhammad",
    linkedInName: "safder-muhammad",
    description: "Our business growth is based on the fact that you have an honest desire to help someone else."
  },
  {
    name: "Kashif Ali",
    position: "Head of Development",
    imgSrc: KashifImg,
    linkedInLink: "https://www.linkedin.com/in/kashifali1/",
    linkedInName: "Kashif-Ali",
    description: "I had to pick myself up and get on with it, do it all over again, only even better this time."
  },
  {
    name: "Shahbaz Wali Muhammad",
    position: "Director Business Development",
    imgSrc: WaliImg,
    linkedInLink: "https://www.linkedin.com/in/shahbaz-wali-muhammad-7a2b3027a/",
    linkedInName: "shahbaz-wali-muhammad-7a2b3027a",
    description: "Visionary Leader in Marketing and Construction."
  },
  {
    name: "Asmaa Dawood",
    position: "Business Development Manager",
    imgSrc: AsmaImg,
    linkedInLink: "https://www.linkedin.com/in/asmaadawood/",
    linkedInName: "Asmaa Dawood",
    description: "Turning possibilities into profits, one strategic partnership at a time – because in business, growth is not just a goal, it's a mindset."
  },
  {
    name: "Muhammad Nouman",
    position: "Project Functional Head",
    imgSrc: NoumanImg,
    linkedInLink: "https://www.linkedin.com/in/muhammad-nouman-451b95201",
    linkedInName: "muhammad-nouman",
    description: "The key to growth is the introduction of higher dimensions of consciousness into our awareness."
  },
  {
    name: "Ahmad Rauf",
    position: "Digital Marketing Manager",
    imgSrc: RoufImg,
    linkedInLink: "https://www.linkedin.com/in/ahmadrauuf",
    linkedInName: "ahmadrauuf",
    description: "Need something changed or is there something not quite working the way you envisaged?..."
  },
  {
    name: "Bilal Javaid",
    position: "Senior Frontend Developer",
    imgSrc: BilalImg,
    linkedInLink: "https://www.linkedin.com/in/bilal-javaid-iqbal-4b3a72230",
    linkedInName: "bilal-javaid-iqbal",
    description: "Words may inspire but action creates change."
  }
];

export const BannerImages = [
  {
    src: TourActivityImg,
    alt: "First slide",
    style: { height: "400px", objectFit: "cover" },
  },
  {
    src: UpdatedBannerImg,
    alt: "Second slide",
    style: { height: "400px", objectFit: "cover" },
  },
  {
    src: PictureTourImg,
    alt: "Third slide",
    style: { height: "400px", objectFit: "cover" },
  },
  {
    src: PictureTourImg2,
    alt: "Fourth slide",
    style: { height: "400px", objectFit: "cover" },
  },
];

export const clientData = [
  { logo: questLogo, alt: 'Quest for Exams' },
  { logo: gulabdeviLogo, alt: 'gulabdevi' },
  { logo: PNYLogo, alt: 'PNY' },
  { logo: MukabbirLogo, alt: 'Muqabar-logo' },
  { logo: Logo20, alt: 'Al-aleem' },
  { logo: PNYLogo, alt: 'PNY' },
];