export default function ContactRow({ setSelectedContactId, contact }) {
  return (
    <tr onClick={() => setSelectedContactId(contact.id)}>
      <td className="contact-info">{contact.name}</td>
      <td className="contact-info">{contact.email}</td>
      <td className="contact-info">{contact.phone}</td>
    </tr>
  );
}
