/**
 *
 * 错误重试
 * 轮询
 * 防抖节流
 * 缓存 & SWR
 * 延迟请求
 */

const getData = ({ params, ms }) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(params), ms)
  })
}

const logPlugin = (instance, options) => {
  return {
    exec: () => {
      console.log('finally');
    }
  }
}

function FetchService (service, options, plugins) {
  this.service = service;
  this.options = options;
  this.plugins = plugins;

  this.run = async () => {
    plugins.map(p => p(this, this.options).exec());
    const res = await this.service(this.options);
    this.options.result = res;
  }
}

const useRequestImplement = (service, options, plugins) => {

  const fetchInstance = new FetchService(service, options, plugins);

  fetchInstance.run(options);
}

const useRequest = async (service, options, plugins) => {

  useRequestImplement(service, options, [
    ...(plugins || []),
    logPlugin,
  ]);
}

const request = async () => {
  const ans = useRequest(getData, { params: 1, ms: 3000 }, []);
}

request();