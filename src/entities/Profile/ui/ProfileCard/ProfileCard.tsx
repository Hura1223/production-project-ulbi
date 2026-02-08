// react
import { FC } from "react";
// libs
import { useTranslation } from "react-i18next";
// helpers
import { classNames, Mods } from "shared/lib/classNames/classNames";
// types
import { IProfile } from "entities/Profile/model/types/profile";
import { TextAlign, TextTheme } from "shared/ui/Text/ui/Text";
import { Country } from "entities/Country/model/types/country";
// ui
import { Text } from "shared/ui/Text";
import { Input } from "shared/ui/Input";
import { Loader } from "shared/ui/Loader/ui/Loader";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Currency, CurrencySelect } from "entities/Currency";
// styles
import styles from "./ProfileCard.module.scss";
import { CountrySelect } from "entities/Country/ui/CountrySelect/CountrySelect";

interface ProfileCardProps {
  className?: string;
  data?: IProfile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirstname?: (value?: string) => void;
  onChangeLastname?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (country: Country) => void;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
  const { t } = useTranslation("profile");
  const {
    className,
    data,
    error,
    isLoading,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props;

  if (isLoading) {
    return (
      <div
        className={classNames(styles.ProfileCard, { [styles.loading]: true }, [
          className,
        ])}
      >
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={classNames(styles.ProfileCard, {}, [
          className,
          styles.error,
        ])}
      >
        <Text
          title={t("Произошла ошибка при загрузке профиля")}
          text={t("Попробуйте обновить страницу")}
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  const mods: Mods = {
    [styles.editing]: !readonly,
  };

  return (
    <div className={classNames(styles.ProfileCard, mods, [className])}>
      <div className={styles.data}>
        {data?.avatar && (
          <div className={styles.avatarWrapper}>
            <Avatar src={data.avatar} alt="avatar" />
          </div>
        )}

        <Input
          className={styles.input}
          value={data?.first}
          placeholder={t("Ваше имя")}
          onChange={onChangeFirstname}
          readonly={readonly}
        />
        <Input
          className={styles.input}
          value={data?.lastname}
          placeholder={t("Ваша фамилия")}
          onChange={onChangeLastname}
          readonly={readonly}
        />
        <Input
          className={styles.input}
          value={data?.age}
          placeholder={t("Ваш возраст")}
          onChange={onChangeAge}
          readonly={readonly}
        />
        <Input
          className={styles.input}
          value={data?.city}
          placeholder={t("Город")}
          onChange={onChangeCity}
          readonly={readonly}
        />
        <Input
          className={styles.input}
          value={data?.username}
          placeholder={t("Введите имя пользователя")}
          onChange={onChangeUsername}
          readonly={readonly}
        />
        <Input
          className={styles.input}
          value={data?.avatar}
          placeholder={t("Введите ссылку на аватар")}
          onChange={onChangeAvatar}
          readonly={readonly}
        />
      </div>
      <CurrencySelect
        className={styles.input}
        onChange={onChangeCurrency}
        value={data?.currency}
        readonly={readonly}
      />
      <CountrySelect
        className={styles.input}
        onChange={onChangeCountry}
        value={data?.country}
        readonly={readonly}
      />
    </div>
  );
};
