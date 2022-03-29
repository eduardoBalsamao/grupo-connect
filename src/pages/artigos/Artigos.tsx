import {ArtigoLayout} from '../../shared/layouts';
import {getDatabase, ref, onValue} from 'firebase/database';
import * as React from 'react';
import app from '../../shared/firebase/firebase';
import {useParams} from 'react-router-dom';

export const Artigos = () =>{
  interface ArtigosData {
    title: string,
    data: string,
    text: string,
    image: string,
  }
  const [data, setData] = React.useState<ArtigosData>();
  const database = getDatabase(app);
  const params = useParams();
  const reference = ref(database, `/Artigos/${params.artigoId}`);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    const getArtigos = async () =>{
      await onValue(reference, (snapshot) =>{
        const artigosData = {
          title: snapshot.val().titulo,
          data: snapshot.val().data,
          text: snapshot.val().texto,
          image: snapshot.val().imagem,
        };
        setData(artigosData);
      });
    };

    getArtigos();
  }, []);
  return (
    <ArtigoLayout title={data?.title} date={data?.data} text={data?.text} image={data?.image}>

    </ArtigoLayout>

  );
};
