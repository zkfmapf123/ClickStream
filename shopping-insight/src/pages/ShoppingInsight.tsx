import DefaultLayout from '../components/@layout';
import ChartContainer from '../container/ChartContainer/ChartContainer';
import FormContainer from '../container/FormContainer/FormContainer';

export default function ShoppingInsight() {
  return (
    <DefaultLayout>
      <FormContainer />
      <ChartContainer />
    </DefaultLayout>
  );
}
