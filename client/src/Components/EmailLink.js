import React from 'react';

function EmailLink() {
  const email = 'recipient@example.com';
  const subject = 'Subject of the email';
  const body = 'Body of the email';

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <a href={mailtoLink}>Send email</a>
  );
}

export default EmailLink