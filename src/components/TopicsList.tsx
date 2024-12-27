const topics = [

   "Technology" ,
   
   "Design Thinking",

   "Crypto",

   "NFT",

   "Personal Growth",

   "Reading",

];


const TopicsList = () => {

  return (

    <div className="bg-white p-4 rounded-lg shadow mt-8">

        <h3 className="font-semmibold text-lg mb-4">Topics for you</h3>

        <div className="flex flex-wrap grap-2"></div>

            {topics.map((topic, index) => (

                <span key={index} className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full
                cusror-pointer hover:bg-gray-300"
                >

                    {topic}

                </span>

            ))}

    </div>

  );

};

export default TopicsList