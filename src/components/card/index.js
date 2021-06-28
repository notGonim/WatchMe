import React, { useContext } from 'react';
import FeatureProvider, { FeatureContext } from '../../context/feature/feature.context';
import {
    Container,
    Group,
    Title,
    SubTitle,
    Text,
    Feature,
    FeatureTitle,
    FeatureText,
    FeatureClose,
    Maturity,
    Content,
    Meta,
    Entities,
    Item,
    Image
    
} from './styles/card.styles';
import PropTypes from 'prop-types';



export default function Card({ children, ...restProps }) {


    return (
        <FeatureProvider >
            <Container {...restProps}>{children}</Container>
        </FeatureProvider>
    );
}
Card.Group = function CardGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>;
};

Card.Title = function CardTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};

Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>;
};

Card.Text = function CardText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};

Card.Entities = function CardEntities({ children, ...restProps }) {
    return <Entities {...restProps}>{children}</Entities>;
};

Card.Meta = function CardMeta({ children, ...restProps }) {
    return <Meta {...restProps}>{children}</Meta>;
};


Card.Item = function CardItem({ item, children, ...restProps }) {
    const { setShowFeature, setItemFeature } = useContext(FeatureContext);

    return (
        <Item
            onClick={() => {
                setItemFeature(item);
                setShowFeature(true);
            }}
            {...restProps}
        >
            {children}
        </Item>
    );
};


Card.Feature = function CardFeature({ children, category, ...restProps }) {
    const { showFeature, itemFeature, setShowFeature } = useContext(FeatureContext);

    return showFeature ? (
        <Feature {...restProps} src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}>
            <Content>
                <FeatureTitle>{itemFeature.title}</FeatureTitle>
                <FeatureText>{itemFeature.description}</FeatureText>
                <FeatureClose onClick={() => setShowFeature(false)}>
                    <img src="/images/icons/close.png" alt="Close" />
                </FeatureClose>

                <Group margin="30px 0" flexDirection="row" alignItems="center">
                    <Maturity rating={itemFeature.maturity}>{itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}</Maturity>
                    <FeatureText fontWeight="bold">
                        {itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}
                    </FeatureText>
                </Group>

                {children}
            </Content>
        </Feature>
    ) : null;
};

Card.Image = function CardImage({ ...restProps }) {
    return <Image {...restProps} />;
  };
  

Card.Feature.propTypes = {
    children: PropTypes.any,
    category: PropTypes.any
};


Card.propTypes = {
    children: PropTypes.any,
};

Card.propTypes = {
    children: PropTypes.any,
};

Card.Group.propTypes = {
    children: PropTypes.any,
};
Card.Title.propTypes = {
    children: PropTypes.any,
};
Card.SubTitle.propTypes = {
    children: PropTypes.any,
};
Card.Text.propTypes = {
    children: PropTypes.any,
};
Card.Entities.propTypes = {
    children: PropTypes.any,
};
Card.Meta.propTypes = {
    children: PropTypes.any,
};
Card.Item.propTypes = {
    children: PropTypes.any,
    item: PropTypes.any
};
