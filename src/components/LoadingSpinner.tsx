export default function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-50/30">
      <div className="text-center">
        <div className="relative w-16 h-16 mx-auto mb-4">
          <div className="absolute inset-0 border-4 border-teal-200 rounded-full" />
          <div className="absolute inset-0 border-4 border-teal-500 rounded-full border-t-transparent animate-spin" />
        </div>
        <p className="text-teal-700 font-medium">Loading...</p>
      </div>
    </div>
  );
}
