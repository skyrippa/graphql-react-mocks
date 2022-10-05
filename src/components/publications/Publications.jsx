import {useQuery} from '@apollo/client'
import PUBLICATIONS_QUERY from './publications.gql'

export const Publications = () => {
  const {loading, error, data} = useQuery(PUBLICATIONS_QUERY);

  if (loading) return null;
  if(error) return `Error! ${error}`;
  if (!data?.publications?.length) {
    return 'No publications found';
  }

  const {publications} = data;

  return <>
    <h1>Publications</h1>
    <ol>
      {publications?.map(publication => <li key={publication.name}><a href={publication.url}>{publication.name}</a></li>)}
    </ol>
  </>
}