const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-navy/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-gold rounded-full animate-spin"></div>
        </div>
        <p className="text-navy font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
