import Image from "next/image";
import "./page.scss";
import Link from 'next/link';

export default function Networks() {
  return (
    <p className="Networks">
      <Link target='_blank' className='Networks__link' href='https://www.instagram.com/junkyclo/#'><
        img className='Networks__picto' src='/images/instagram.png' />
      </Link>
      <Link target='_blank' className='Networks__link' href='https://www.threads.net/@junkyclo'>
        <img className='Networks__picto' src='/images/threads.png' />
      </Link>
      <Link target='_blank' className='Networks__link' href='https://www.facebook.com/profile.php?id=100012685540669'>
        <img className='Networks__picto' src='/images/facebook.png' />
      </Link>
      <Link target='_blank' className='Networks__link' href=''>
        <img className='Networks__picto' src='/images/bluesky.svg' />
      </Link>
    </p>
  );
}
