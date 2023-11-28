const App = () => {
  const [data, setData] = React.useState("");
  const [header, setHeader] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.post("https://chimpu.xyz/api/post.php", {
        phonenumber: 12345677,
      });
      console.log(response?.headers, " the respone");
      if (response) {
        setData(response.data.msg);
        setHeader(response.header)
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <>
    <h1 className="text-center p-10 text-2xl font-bold underline underline-offset-8">DATA IN THE RESPONSE</h1>
      {loading ? (
        <div class="flex-col gap-4 w-full h-screen flex items-center justify-center">
          <div class="w-28 h-28 border-8 text-blue-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-blue-400 rounded-full">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1em"
              width="1em"
              class="animate-ping"
            >
              <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"></path>
            </svg>
          </div>
        </div>
      ) : (
        // <h1 className="text-3xl">Response : {data}</h1>
        <>
          <div className="flex gap-5 justify-center items-center h-[50%]">
            <div class="min-w-[20rem] min-h-[10rem] p-6 bg-white border border-gray-200 rounded-lg shadow">
     
              <a href="#">
                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">
                  Response Data
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-800 dark:text-gray-800">
                {data}
              </p>
          
            </div>
            <div class="min-w-[20rem] min-h-[10rem] p-6 border border-gray-200 rounded-lg shadow ">
       
              <a href="#">
                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">
                  Header Data
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-800 dark:text-gray-800">
                {header}
              </p>
           
            </div>
          </div>
        </>
      )}
    </>
  );
};

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
