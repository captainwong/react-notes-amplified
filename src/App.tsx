import React, { useState } from 'react';
import { CreateNote, NavBar, NoteUICollection, UpdateNote } from './ui-components';
import { Note } from './models';
import { withAuthenticator, WithAuthenticatorProps } from '@aws-amplify/ui-react';
import { DataStore } from 'aws-amplify';

function App({signOut}: WithAuthenticatorProps) {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updateNote, setUpdateNode] = useState<Note>({} as Note);

  return (
    <>
      <NavBar
        width='100%'
        marginBottom={20}
        overrides={{
          Button38464639: { onClick: () => setShowCreateModal(true) },
          Button38464640: {
            onClick: async () => {
              signOut?.();
              await DataStore.clear();
            }
          }
        }}
      />
      <div className="container">
        <NoteUICollection
          overrideItems={({ item, index }) => {
            return {
              overrides: {
                Vector38464611: {
                  onClick: () => {
                    console.log('item', item);
                    setUpdateNode(item);
                    setShowUpdateModal(true);
                  }
                }
              }
            };
          }}
        />
      </div>
      <div className="modal" style={{ display: showCreateModal ? 'block' : 'none' }}>
        <CreateNote
          overrides={{
            MyIcon: {
              onClick: () => setShowCreateModal(false)
            }
          }}
        />
      </div>
      <div className="modal" style={{ display: showUpdateModal ? 'block' : 'none' }}>
        <UpdateNote
          note={updateNote}
          overrides={{
            Vector: {
              onClick: () => setShowUpdateModal(false)
            }
          }}
        />
      </div>
    </>
  );
}

export default withAuthenticator(App);
