import React from 'react';
import Thread from './Thread';

interface Thread {
  id: number;
  title: string;
  content: string;
  image?: string;
  votes: number;
}

interface ThreadListProps {
  threads: Thread[];
  onVote: (id: number, type: 'up' | 'down') => void;
  onReply: (id: number) => void;
}

const ThreadList: React.FC<ThreadListProps> = ({ threads, onVote, onReply }) => (
  <div>
    {threads.map((thread) => (
      <Thread
        key={thread.id}
        title={thread.title}
        content={thread.content}
        image={thread.image}
        votes={thread.votes}
        onVote={(type) => onVote(thread.id, type)}
        onReply={() => onReply(thread.id)}
      />
    ))}
  </div>
);

export default ThreadList;
