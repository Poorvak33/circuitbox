import React, { useState } from 'react';
import { Container, Title } from '@mantine/core';
import ThreadList from '../components/shared/Thread/ThreadList';
import ThreadInput from '../components/shared/Thread/ThreadInput';

interface Thread {
  id: number;
  title: string;
  content: string;
  image?: string;
  votes: number;
}

const DTCBoardPage: React.FC = () => {
  const [threads, setThreads] = useState<Thread[]>([]);

  const handleCreateThread = (title: string, content: string, image?: File | null) => {
    const newThread: Thread = {
      id: threads.length + 1,
      title,
      content,
      image: image ? URL.createObjectURL(image) : undefined,
      votes: 0,
    };
    setThreads([...threads, newThread]);
  };

  const handleVote = (id: number, type: 'up' | 'down') => {
    setThreads(threads.map((thread) =>
      thread.id === id ? { ...thread, votes: thread.votes + (type === 'up' ? 1 : -1) } : thread
    ));
  };

  const handleReply = (id: number) => {
    // Implement reply functionality
  };

  return (
    <Container>
      <Title style={{ textAlign: 'center', marginBottom: '1.5rem' }}>DTC Discussion Board</Title>
      <ThreadInput onCreate={handleCreateThread} />
      <ThreadList threads={threads} onVote={handleVote} onReply={handleReply} />
    </Container>
  );
};

export default DTCBoardPage;


