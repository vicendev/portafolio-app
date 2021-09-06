import axios from "axios";

const portafolioConfig = {
  protocol:"http://",
  url: "45.7.230.159",
  port: ":8081",
  endpoint: "/api"
};

const connectionString = "".concat(
  portafolioConfig.protocol,
  portafolioConfig.url,
  portafolioConfig.port,
  portafolioConfig.endpoint
);

export const getDataPortafolioAPI = async (collection) => {

  const resp = await axios({
    method: 'get',
    url: `${connectionString}${collection}`,
    responseType: 'json'
  })
  
  return resp.data;

}

export const getDataByIdPortafolioAPI = async (collection, id) => {

  const resp = await axios({
    method: 'get',
    url: `${connectionString}${collection}/${id}`,
    responseType: 'json'
  })
  
  return resp.data;
}