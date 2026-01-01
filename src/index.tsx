import { useState } from 'react';

interface Conversation {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
}

const Signal: React.FC = () => {
  const [conversations] = useState<Conversation[]>([
    { id: '1', name: 'Alice', lastMessage: 'End-to-end encrypted', time: '2:45 PM' },
    { id: '2', name: 'Bob', lastMessage: 'See you soon!', time: '1:30 PM' },
    { id: '3', name: 'Secure Group', lastMessage: 'Meeting at 5', time: 'Yesterday' },
  ]);
  const [selected, setSelected] = useState('1');
  const [message, setMessage] = useState('');

  return (
    <div className="h-full flex bg-white">
      {/* Sidebar */}
      <div className="w-72 border-r flex flex-col">
        <div className="h-14 bg-[#3a76f0] flex items-center justify-center">
          <span className="text-white font-bold text-xl">🔒 Signal</span>
        </div>
        <div className="p-3 border-b">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-3 py-2 bg-gray-100 rounded text-sm"
          />
        </div>
        <div className="flex-1 overflow-auto">
          {conversations.map(conv => (
            <div
              key={conv.id}
              onClick={() => setSelected(conv.id)}
              className={`flex items-center gap-3 px-4 py-3 cursor-pointer ${
                selected === conv.id ? 'bg-[#3a76f0]/10' : 'hover:bg-gray-50'
              }`}
            >
              <div className="w-12 h-12 bg-[#3a76f0] rounded-full flex items-center justify-center text-white font-bold">
                {conv.name[0]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between">
                  <span className="font-medium">{conv.name}</span>
                  <span className="text-xs text-gray-400">{conv.time}</span>
                </div>
                <div className="text-sm text-gray-500 truncate">{conv.lastMessage}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat */}
      <div className="flex-1 flex flex-col">
        <div className="h-14 border-b flex items-center px-4 gap-3">
          <div className="w-10 h-10 bg-[#3a76f0] rounded-full flex items-center justify-center text-white font-bold">
            {conversations.find(c => c.id === selected)?.name[0]}
          </div>
          <div>
            <div className="font-semibold">{conversations.find(c => c.id === selected)?.name}</div>
            <div className="text-xs text-gray-500 flex items-center gap-1">
              🔒 Messages are end-to-end encrypted
            </div>
          </div>
        </div>

        <div className="flex-1 bg-gray-50 p-4 overflow-auto">
          <div className="flex justify-end mb-3">
            <div className="bg-[#3a76f0] text-white rounded-2xl px-4 py-2 max-w-xs">
              <p>Hey! This is encrypted 🔐</p>
            </div>
          </div>
          <div className="flex mb-3">
            <div className="bg-white shadow-sm rounded-2xl px-4 py-2 max-w-xs">
              <p>I know, Signal is great!</p>
            </div>
          </div>
        </div>

        <div className="p-3 border-t flex gap-2">
          <button className="w-10 h-10 flex items-center justify-center text-gray-500">➕</button>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Signal message"
            className="flex-1 px-4 py-2 bg-gray-100 rounded-full"
          />
          <button className="w-10 h-10 bg-[#3a76f0] rounded-full flex items-center justify-center text-white">
            ➤
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signal;
