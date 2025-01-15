import { useState, useEffect } from 'react';



export const Dashboard = () => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  
    try {
      fetch('http://localhost:8080/db', {
        credentials: 'include'
      })
        .then(async (res) => {

          if (!res.ok) {
            throw new Error('Not Authenticated');
          }

          const user = await res.json();

          setUser(user);
        });


    } catch (error) {
      console.log(error);
    }

    console.log(user);

    setLoading(false);
  }, []);
  

  return (

    <>
      <div>Dashboard</div>

      {user && <div>
        logged in as {user.username}
        </div>}


    </>
    
    
  )
}

export default Dashboard