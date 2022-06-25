import {
  TextInput,
  Checkbox,
  Button,
  Group,
  Box,
  NumberInput,
  Autocomplete,
  SegmentedControl,
  InputWrapper,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { Wine, wineKind } from "./Wine";

export const AddWine = () => {
  const form = useForm<Wine>({
    initialValues: {
      year: 2000,
      appellation: "",
      castle: "",
      kind: "rouge",
    },
  });

  const castleAutocompleteData = ["React", "Angular", "Svelte", "Vue"];

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <Autocomplete
          label="Château"
          placeholder="château de France"
          data={castleAutocompleteData}
          {...form.getInputProps("castle")}
        />

        <Autocomplete
          label="Appellation"
          placeholder="Graves"
          data={castleAutocompleteData}
          {...form.getInputProps("castle")}
        />

        <NumberInput
          placeholder="2015"
          label="Année"
          required
          {...form.getInputProps("year")}
        />

        <InputWrapper label="Couleur">
          <SegmentedControl
            size="md"
            data={wineKind.map((k) => ({ label: k, value: k }))}
            {...form.getInputProps("kind")}
          />
        </InputWrapper>

        <Group mt="md">
          <Button type="submit">Ajouter</Button>
        </Group>
      </form>
    </Box>
  );
};
