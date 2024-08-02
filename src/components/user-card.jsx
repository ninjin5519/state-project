import React from "react";

const UserCard = ({ userImg, firstName, userId, deleteUser }) => {
  return (
    <div className="flex items-center gap-5 p-5 border rounded-lg">
      <img className="w-10 h-10 rounded-full" src={userImg} alt="" />
      <div>
        <h1>{firstName}</h1>
      </div>
      <button
        className="border border-solid text-xs px-1 h-6 rounded bg-red-400"
        onClick={() => deleteUser(userId)}
      >
        Delete
      </button>
    </div>
  );
};

export default UserCard;
