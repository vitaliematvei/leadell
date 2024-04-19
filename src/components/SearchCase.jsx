import { useEffect, useState } from "react";

function SearchCase() {
  const url = "https://jsonplaceholder.typicode.com/users";

  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [details, setDetails] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const users = await response.json();
      setData(users);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const searchParams = Object.keys(Object.assign({}, ...data));

  const handleSearch = (event) => {
    setQuery(event.target.value.toLowerCase());
  };

  const filteredData = data.filter((user) => {
    return searchParams.some((param) =>
      user[param].toString().toLowerCase().includes(query)
    );
  });

  const handleDetails = (user) => {
    setDetails(!details);
    setSelectedUser(user);
  };

  const Modal = ({ isOpen, onClose, selectedUser }) =>
    isOpen && (
      <div className="bg-white rounded shadow-md px-4 py-4 h-fill w-fill fixed left-7 bottom-10 flex justify-between">
        <div>
          <p className="text-blue-900">Main Info:</p>
          <div className="pl-10">
            <p>ID:{selectedUser?.id}</p>
            <p>Name: {selectedUser?.name}</p>
            <p>User Name: {selectedUser?.username}</p>
            <p>Email: {selectedUser?.email}</p>
          </div>
          <div>
            <p className="text-blue-900">Address: </p>
            <div className="pl-10">
              <p>Street: {selectedUser?.address.street}</p>
              <p>Suite: {selectedUser?.address.suite}</p>
              <p>City: {selectedUser?.address.city}</p>
              <p>Zip: {selectedUser?.address.zipcode}</p>
            </div>
            <p className="text-blue-900">Geo: </p>
            <div className="pl-10">
              <p>Lat: {selectedUser?.address.geo.lat}</p>
              <p>Lng: {selectedUser?.address.geo.lng}</p>
            </div>
            <p className="text-blue-900">
              Phone:{" "}
              <span className="text-gray-900">{selectedUser?.phone}</span>
            </p>
            <p className="text-blue-900">
              Website:{" "}
              <span className="text-gray-900">{selectedUser?.website}</span>
            </p>
          </div>
          <p className="text-blue-900">Company:</p>
          <div className="pl-10">
            <p>Name: {selectedUser?.company.name}</p>
            <p>CatchPhrase: {selectedUser?.company.catchPhrase}</p>
            <p>Bs: {selectedUser?.company.bs}</p>
          </div>
        </div>
        <div onClick={onClose} className="cursor-pointer">
          ✖️
        </div>
      </div>
    );

  return (
    <section className="max-w-[1512px] mx-auto p-8 md:px-24 md:py-44 text-black bg-white">
      <div className="max-w-[1296] mx-auto">
        <div className="bg-gray-100 flex py-4 px-4 rounded-lg">
          <div className="">
            <div className="bg-white border rounded-full py-1">
              <span className="px-2"></span>
              <input
                type="search"
                name="search-form"
                id="search-form"
                className="border-none focus:outline-none w-4/5"
                onChange={handleSearch}
                placeholder="Search..."
              />
            </div>
          </div>
          <div>
            {query && (
              <table className="w-1/4 table-auto shadow-md rounded-lg">
                <thead>
                  <tr className="text-xs font-medium text-left text-gray-700 bg-gray-100 dark:text-gray-400 dark:bg-gray-700">
                    <th className="px-6 py-3">Username</th>
                    <th className="px-6 py-3">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((user) => (
                    <tr key={user.id}>
                      <td className="px-6 py-4 whitespace-nowrap border-b hover:bg-gray-200">
                        {user.username}
                      </td>
                      <td
                        className="px-6 py-4 text-right bg-gray-100 hover:bg-gray-200 border"
                        onClick={() => handleDetails(user)}
                      >
                        <button
                          type="button"
                          className="active:border-none text-indigo-600 hover:text-indigo-800"
                        >
                          Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
      {selectedUser && details && (
        <Modal
          isOpen={details}
          onClose={handleDetails}
          selectedUser={selectedUser}
        />
      )}
    </section>
  );
}

export default SearchCase;
