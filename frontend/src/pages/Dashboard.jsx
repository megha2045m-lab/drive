import FileUpload from "../components/FileUpload";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-6">
        My Drive
      </h1>

      <FileUpload />
    </div>
  );
}

export default Dashboard;