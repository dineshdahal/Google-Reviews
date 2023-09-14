import {Link, AccountConnection} from '@shopify/polaris';
import {useState, useCallback} from 'react';

const Disconnect=()=> {
  const [connected, setConnected] = useState(false);
  const accountName = connected ? 'Dinesh Dahal' : '';

  const handleAction = useCallback(() => {
    setConnected((connected) => !connected);
  }, []);

  const buttonText = connected ? 'Disconnect' : 'Connect';
  const details = connected ? 'Sallaghari Bhaktapur' : 'No account connected';
  

  return (
    <AccountConnection
      accountName={accountName}
      connected={connected}
      title="Nerd Platoon"
      action={{
        content: buttonText,
        onAction: handleAction,
      }}
      details={details}
    />
  );
}


export default Disconnect;