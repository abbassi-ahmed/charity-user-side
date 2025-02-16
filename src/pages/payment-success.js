import Link from "@/components/Reuseable/Link";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function PaymentSuccess() {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="card shadow-lg border-0"
        style={{ maxWidth: "400px" }}
      >
        <div className="card-body p-5">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="text-center mb-4"
          >
            <CheckCircle className="text-success" size={64} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="card-title text-center mb-4 fw-bold"
          >
            Payment Successful!
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-center text-muted mb-4">
              Thank you for your purchase. Your transaction has been completed
              successfully.
            </p>
            <div className="bg-light rounded p-3 mb-4">
              <p className="small text-muted mb-0">
                Date:{" "}
                <span className="fw-bold">
                  {new Date().toLocaleDateString()}
                </span>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <Link
              href="/"
              className="btn btn-primary-pay btn-lg position-relative overflow-hidden"
            >
              <span className="d-flex align-items-center justify-content-center">
                Return to Home
                <ArrowRight className="ms-2" size={20} />
              </span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
