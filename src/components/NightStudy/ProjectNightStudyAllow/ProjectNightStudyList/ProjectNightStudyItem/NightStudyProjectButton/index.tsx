import { DodamFilledButton} from "@b1nd/dds-web";
const NightStudyProjectButton = () => {
  return (
    <>
      <DodamFilledButton
        text="승인"
        width={90}
        size="Small"
        textTheme="staticWhite"
        backgroundColorType="Primary"
        customStyle={{ minHeight: "24px" }}
        typography={['Body1', 'Medium']}
      />
      <div style={{ paddingBottom: "4px" }}/>
      <DodamFilledButton
        text="거절"
        width={90}
        size="Small"
        textTheme="staticWhite"
        backgroundColorType="Negative"
        customStyle={{ minHeight: "24px" }}
        typography={['Body1', 'Medium']}
      />
    </>
  );
};

export default NightStudyProjectButton;
