import useGetData from "../hooks/useGetData";
import Card from "../components/Card";

const Home = () => {
  const { data, error, isLoading } = useGetData("/listings");
  if (isLoading)
    return (
      <div className="flex justify-center items-center h-full w-full">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center items-center h-full w-full">
        Error: {JSON.stringify(error)}
      </div>
    );
  return (
    <div>
      {data.map((el, idx) => (
        <Card {...el} isEven={idx%2 == 0 ? true : false} key={idx} id={el._id}/>
      ))}
    </div>
  )
};

export default Home;
