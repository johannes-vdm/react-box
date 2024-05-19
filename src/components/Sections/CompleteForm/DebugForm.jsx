import { useFormContext } from 'react-hook-form';

export default function DebugForm() {
    const { formState, watch } = useFormContext();
    const { touchedFields, dirtyFields, errors, isValidating, isSubmitting } = formState;

    console.log('isValidating', isValidating, 'isSubmitting', isSubmitting);

    return (
        <pre style={{ whiteSpace: 'break-spaces' }}>
      isValidating: {isValidating ? 'yes' : 'no'}<br />
      isSubmitting: {isSubmitting ? 'yes' : 'no'}<br />
      Form fields:<br />
            {JSON.stringify(watch(), null, 4)}{"\n\n"}
            {JSON.stringify({ touchedFields, dirtyFields, errors: Object.keys(errors) }, null, 4)}{"\n\n"}
    </pre>
    );
}
