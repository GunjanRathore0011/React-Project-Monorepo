import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersRequest } from '../redux/slice/userSlice';

const User = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  return (
    <div >
      <h2>Redux Saga </h2>

      <button onClick={() => dispatch(fetchUsersRequest())}>
        Fetch Users
      </button>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default User