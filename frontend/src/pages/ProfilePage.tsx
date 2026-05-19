import { Pencil } from "lucide-react";

export default function Profile() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Profile</h1>
        <span className="text-sm text-gray-500">Home &gt; Profile</span>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-2xl shadow-sm p-6 mb-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img
            src="https://i.pravatar.cc/100"
            className="w-16 h-16 rounded-full"
            alt="avatar"
          />
          <div>
            <h2 className="font-semibold text-lg">Musharof Chowdhury</h2>
            <p className="text-gray-500 text-sm">
              Team Manager | Arizona, United States
            </p>
          </div>
        </div>

        <button className="flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-gray-100">
          <Pencil size={16} />
          Edit
        </button>
      </div>

      {/* Personal Info */}
      <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
        <div className="flex justify-between mb-4">
          <h3 className="font-semibold">Personal Information</h3>
          <button className="flex items-center gap-2 border px-3 py-1 rounded-lg text-sm">
            <Pencil size={14} /> Edit
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-500">First Name</p>
            <p>Musharof</p>
          </div>

          <div>
            <p className="text-gray-500">Last Name</p>
            <p>Chowdhury</p>
          </div>

          <div>
            <p className="text-gray-500">Email</p>
            <p>randomuser@pimjo.com</p>
          </div>

          <div>
            <p className="text-gray-500">Phone</p>
            <p>+09 363 398 46</p>
          </div>

          <div className="col-span-2">
            <p className="text-gray-500">Bio</p>
            <p>Team Manager</p>
          </div>
        </div>
      </div>

      {/* Address */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <div className="flex justify-between mb-4">
          <h3 className="font-semibold">Address</h3>
          <button className="flex items-center gap-2 border px-3 py-1 rounded-lg text-sm">
            <Pencil size={14} /> Edit
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-500">Country</p>
            <p>United States</p>
          </div>

          <div>
            <p className="text-gray-500">City/State</p>
            <p>Phoenix, Arizona</p>
          </div>

          <div>
            <p className="text-gray-500">Postal Code</p>
            <p>ERT 2489</p>
          </div>

          <div>
            <p className="text-gray-500">TAX ID</p>
            <p>AS4568384</p>
          </div>
        </div>
      </div>
    </div>
  );
}