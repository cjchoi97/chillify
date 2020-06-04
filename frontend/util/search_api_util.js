export const search = term => {
  return $.ajax({
    method: 'GET',
    url: '/api/searches',
    data: {term}
  });
}