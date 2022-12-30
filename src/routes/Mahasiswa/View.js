import { Fragment, useEffect, useState } from 'react';
import Search from '../../components/Search';
import ProfileCard from '../../components/ProfileCard';

const MAHASISWA_ENDPOINT = "https://637c622172f3ce38eaa0c862.mockapi.io/api/v1/mahasiswa?page=1&limit=10";

function Mahasiswa() {
  const [searchValue, setSearchValue] = useState('');
  const [mahasiswa, setMahasiswa] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSearch = (search) => {
    setSearchValue(search);
  };

  useEffect(() => {
    setLoading(true);

    const fetchMahasiswa = async () => {
      const fetchResponse = await fetch(`${MAHASISWA_ENDPOINT}&name=${searchValue}`);
      const dataMahasiswa = await fetchResponse.json();
  
      setMahasiswa(dataMahasiswa);
    }

    fetchMahasiswa();
    setLoading(false);
  }, [searchValue]);

  const Loading = () => <div className='loading'><p>Memuat data ...</p></div>;

  const ListMahasiswa = () => mahasiswa.map(item => {
    return (
      <ProfileCard
        key={item.id}
        id={item.id}
        nama={item.name}
        jurusan={item.major_name}
        fakultas={item.faculty_name}
        photo={item.photo}
        nim={item.nim}
      />
    )
  });

  return (
    <Fragment>
      <Search onSearch={handleSearch} />
      {loading ? <Loading/> : <ListMahasiswa />}
    </Fragment>
  )
}

export default Mahasiswa;