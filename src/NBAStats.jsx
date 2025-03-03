import React from "react";
import { motion } from "framer-motion";

const players = [
  {
    name: "LeBron James",
    team: "Los Angeles Lakers",
    points: 27.2,
    assists: 7.5,
    rebounds: 8.1,
    img: "https://i.imgur.com/OYQnH6N.png",
  },
  {
    name: "Stephen Curry",
    team: "Golden State Warriors",
    points: 29.3,
    assists: 6.7,
    rebounds: 5.5,
    img: "https://i.imgur.com/tE5mlA4.png",
  },
  {
    name: "Giannis Antetokounmpo",
    team: "Milwaukee Bucks",
    points: 30.1,
    assists: 5.8,
    rebounds: 11.6,
    img: "https://i.imgur.com/mFpeB2x.png",
  },
];

const NBAStats = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-10 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-10">🏀 NBA Star Players Stats</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {players.map((player, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.img
              src={player.img}
              alt={player.name}
              className="w-40 h-40 object-cover rounded-full shadow-md mb-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <h2 className="text-2xl font-semibold">{player.name}</h2>
            <p className="text-sm text-gray-400">{player.team}</p>

            <div className="mt-4 w-full">
              {/* Points */}
              <div className="flex justify-between text-sm">
                <span>🏀 Points:</span>
                <motion.span
                  className="text-blue-400 font-bold"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {player.points}
                </motion.span>
              </div>
              <motion.div
                className="h-2 bg-blue-500 rounded-full mt-1"
                style={{ width: `${player.points * 3}%` }}
                initial={{ width: "0%" }}
                animate={{ width: `${player.points * 3}%` }}
                transition={{ duration: 0.8 }}
              />

              {/* Assists */}
              <div className="flex justify-between text-sm mt-2">
                <span>🎯 Assists:</span>
                <motion.span
                  className="text-green-400 font-bold"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {player.assists}
                </motion.span>
              </div>
              <motion.div
                className="h-2 bg-green-500 rounded-full mt-1"
                style={{ width: `${player.assists * 10}%` }}
                initial={{ width: "0%" }}
                animate={{ width: `${player.assists * 10}%` }}
                transition={{ duration: 0.8 }}
              />

              {/* Rebounds */}
              <div className="flex justify-between text-sm mt-2">
                <span>🔄 Rebounds:</span>
                <motion.span
                  className="text-yellow-400 font-bold"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {player.rebounds}
                </motion.span>
              </div>
              <motion.div
                className="h-2 bg-yellow-500 rounded-full mt-1"
                style={{ width: `${player.rebounds * 8}%` }}
                initial={{ width: "0%" }}
                animate={{ width: `${player.rebounds * 8}%` }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default NBAStats;
