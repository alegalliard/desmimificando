import { useRouter } from 'next/router';

// export const Home = () => {

export default function Game({ players }) {
    const router = useRouter();
  const handleSearch = (event) => {
      router.push({
        pathname: '/dashboard',
        query: { gameplay: 1}
      });
    
}
    return (<>
        <h1 onClick={handleSearch}>Game Dashboard</h1>
    </>);
}