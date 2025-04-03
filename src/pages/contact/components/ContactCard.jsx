export default function ContactCard({ title, name, email, phone }) {
    return (
        <div className="bg-white rounded-lg overflow-hidden CardShadow">
        <div className="px-6 py-4">
            <h1 className="text-3xl md:text-4xl overflow-visible font-bold font-figtree textShadow-md text-gray-800 my-2">
            {title}
            </h1>
            <p className="text-md font-kodeMono text-gray-600 my-1">Name: {name}</p>
            <p className="text-md font-kodeMono text-gray-600 my-1">
            Email: <a href={`mailto:${email}`} className="text-blue-500 ">{email}</a>
            </p>
            <p className="text-md font-kodeMono text-gray-600 my-1">
            Phone: <a href={`tel:${phone}`} className="text-blue-500">{phone}</a>
            </p>
        </div>
        </div>
    );
}