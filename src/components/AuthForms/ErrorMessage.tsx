import { FieldError } from "react-hook-form";
import Text from "../ui/Text";

const ErrorMessage: React.FC<{
  error: FieldError | undefined;
}> = ({ error }) => {
  if (error) {
    return (
      <Text className="self-start" color="red" size="S">
        {error.message}
      </Text>
    );
  }
  return null;
};

export default ErrorMessage;
